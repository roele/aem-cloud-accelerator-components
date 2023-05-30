import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'aem-cloud-accelerator-components',
  outputTargets: [
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
  ]
};
