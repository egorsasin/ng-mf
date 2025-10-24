import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  exposes: {
    './Routes': 'apps/shell/src/app/remote-entry/entry.routes.ts',
    './Wrapper': 'apps/shell/src/app/remote-entry/entry.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
