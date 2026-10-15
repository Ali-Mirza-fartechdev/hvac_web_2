import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { Icon } from '../ui/Icon';

/**
 * Simple request form. It posts JSON to FORM_ENDPOINT (the Vercel function in
 * api/contact.ts). Until the email provider keys are added, the server answers
 * "not configured" and this form says so honestly instead of pretending to send.
 */
const FORM_ENDPOINT = '/api/contact';

export const serviceOptions = ['AC Repair', 'AC Installation / Replacement', 'Heating / Furnace', 'Maintenance', 'Other / Not sure'] as const;

type Fields = { name: string; phone: string; email: string; service: string; message: string; consent: boolean; website: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'success' } | { kind: 'error'; text: string };

const initial: Fields = { name: '', phone: '', email: '', service: '', message: '', consent: false, website: '' };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name.';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number.';
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.service) e.service = 'Choose a service.';
  if (v.message.trim().length < 10) e.message = 'Tell us a little about the issue.';
  if (!v.consent) e.consent = 'Please confirm you agree to be contacted.';
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const submitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setValues((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const fieldProps = (key: keyof Fields) => ({
    id: `cf-${key}`,
    'aria-invalid': errors[key] ? (true as const) : undefined,
    'aria-describedby': errors[key] ? `cf-${key}-err` : undefined,
  });

  const err = (key: keyof Fields) =>
    errors[key] ? (
      <p className="field__error" id={`cf-${key}-err`}>
        <Icon name="alert" size={14} /> {errors[key]}
      </p>
    ) : null;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting.current) return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ kind: 'error', text: 'Please fix the highlighted fields and try again.' });
      formRef.current?.querySelector<HTMLElement>(`#cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    submitting.current = true;
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      });
      const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; fields?: Errors } | null;
      if (res.ok && body?.ok) {
        setStatus({ kind: 'success' });
        setValues(initial);
      } else if (res.status === 422 && body?.fields) {
        setErrors(body.fields);
        setStatus({ kind: 'error', text: 'Please fix the highlighted fields and try again.' });
      } else if (res.status === 503 || res.status === 404) {
        setStatus({ kind: 'error', text: `Online requests aren’t switched on yet. Please call us at ${business.phone}.` });
      } else {
        setStatus({ kind: 'error', text: `We couldn’t send your request. Please try again, or call us at ${business.phone}.` });
      }
    } catch {
      setStatus({ kind: 'error', text: `We couldn’t reach the server. Please check your connection or call ${business.phone}.` });
    } finally {
      submitting.current = false;
    }
  }

  if (status.kind === 'success') {
    return (
      <div className="form-status form-status--success" role="status">
        <Icon name="checkCircle" size={20} />
        <div>
          <strong>Request sent.</strong>
          <p>
            Thank you. We received your request and will be in touch. For urgent issues, call <a href={business.phoneHref}>{business.phone}</a>.
          </p>
          <button type="button" className="link-arrow" onClick={() => setStatus({ kind: 'idle' })}>
            Send another request
          </button>
        </div>
      </div>
    );
  }

  const sending = status.kind === 'sending';

  return (
    <form ref={formRef} className="contact-form stack" onSubmit={onSubmit} noValidate aria-busy={sending}>
      <div className="form-row">
        <div className="field">
          <label className="field__label" htmlFor="cf-name">
            Full name
          </label>
          <input {...fieldProps('name')} className="input" type="text" autoComplete="name" value={values.name} onChange={(e) => set('name', e.target.value)} required />
          {err('name')}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="cf-phone">
            Phone number
          </label>
          <input {...fieldProps('phone')} className="input" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} required />
          {err('phone')}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label className="field__label" htmlFor="cf-email">
            Email <small>(optional)</small>
          </label>
          <input {...fieldProps('email')} className="input" type="email" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} />
          {err('email')}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="cf-service">
            Service needed
          </label>
          <select {...fieldProps('service')} className="select" value={values.service} onChange={(e) => set('service', e.target.value)} required>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {err('service')}
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="cf-message">
          How can we help?
        </label>
        <textarea {...fieldProps('message')} className="textarea" value={values.message} onChange={(e) => set('message', e.target.value)} required />
        {err('message')}
      </div>

      {/* Honeypot — hidden from people and assistive tech */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      <div className="field">
        <label className="consent">
          <input {...fieldProps('consent')} type="checkbox" checked={values.consent} onChange={(e) => set('consent', e.target.checked)} />
          <span>
            I agree to be contacted about my request. See our <Link to="/privacy">Privacy Policy</Link>.
          </span>
        </label>
        {err('consent')}
      </div>

      <div aria-live="polite">
        {status.kind === 'error' && (
          <div className="form-status form-status--error" role="alert">
            <Icon name="alert" size={18} />
            <p>{status.text}</p>
          </div>
        )}
      </div>

      <button className="btn btn--primary btn--block" type="submit" disabled={sending}>
        {sending ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send Service Request'
        )}
      </button>
    </form>
  );
}
