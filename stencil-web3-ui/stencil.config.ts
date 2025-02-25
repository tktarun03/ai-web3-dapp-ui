import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-web3-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
