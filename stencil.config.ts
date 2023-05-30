import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'aem-cloud-accelerator-components',
  outputTargets: [
    {
      type: 'dist-hydrate-script'
    },
    {
      esmLoaderPath: '../loader',
      type: 'dist'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      serviceWorker: null,
      type: 'www'
    }
  ],
  plugins: [sass()]
};
