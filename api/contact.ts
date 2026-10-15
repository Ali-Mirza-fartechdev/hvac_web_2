/**
 * Vercel serverless function: POST /api/contact
 *
 * Sends the request to the business inbox through Resend. All secrets are read
 * from server-side environment variables (never VITE_-prefixed):
 *   RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL
 *
 * The function only reports success when Resend accepted the message.
 */

interface Payload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown; // honeypot
}

const SERVICES = ['AC Repair', 'AC Installation / Replacement', 'Heating / Furnace', 'Maintenance', 'Other / Not sure'];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

// Best-effort per-instance rate limit (serverless instances are not shared).
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('Contact form is not configured: missing RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL');
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return json({ ok: false, error: 'rate_limited' }, 429);

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: bots fill the hidden field. Reply 200 without sending anything.
  if (str(data.website, 200)) return json({ ok: true });

  const name = str(data.name, 120);
  const phone = str(data.phone, 40);
  const email = str(data.email, 200);
  const service = str(data.service, 80);
  const message = str(data.message, 4000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Enter your name.';
  if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a valid phone number.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (!SERVICES.includes(service)) errors.service = 'Choose a service.';
  if (message.length < 10) errors.message = 'Tell us a little about the issue.';
  if (data.consent !== true) errors.consent = 'Please confirm you agree to be contacted.';
  if (Object.keys(errors).length) return json({ ok: false, error: 'validation', fields: errors }, 422);

  const rows: [string, string][] = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || '—'],
    ['Service', service],
  ];
  const html = `<h2>New service request</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${esc(v)}</td></tr>`)
    .join('')}</table><p><strong>Details</strong></p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nDetails:\n${message}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()),
        reply_to: email || undefined,
        subject: `Service request: ${service} — ${name}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error('Resend rejected the message', res.status, await res.text());
      return json({ ok: false, error: 'send_failed' }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('Resend request failed', err);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
}
