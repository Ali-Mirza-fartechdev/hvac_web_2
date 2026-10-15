import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from './app/App';
import { findMeta, headMarkup } from './data/seo';

/** Renders one route to an HTML string, waiting for lazy page chunks to resolve. */
export function render(url: string): Promise<{ html: string; head: string; status: number }> {
  return new Promise((resolve, reject) => {
    const meta = findMeta(url);
    const stream = new PassThrough();
    const chunks: Buffer[] = [];
    stream.on('data', (c: Buffer) => chunks.push(c));
    stream.on('end', () =>
      resolve({
        html: Buffer.concat(chunks).toString('utf8'),
        head: headMarkup(meta),
        status: meta.path === '/404' ? 404 : 200,
      }),
    );
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(stream);
        },
        onShellError: reject,
        onError: (e) => console.error(e),
      },
    );
  });
}
