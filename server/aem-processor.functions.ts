import { renderToString } from '@aem-cloud-accelerator-components/hydrate';

async function processHtml(args: any) {
  const origHtml = args.data;
  const results = await renderToString(origHtml, {
    prettyHtml: true,
    clientHydrateAnnotations: false,
  });

  return results.html;
}

export default processHtml;
