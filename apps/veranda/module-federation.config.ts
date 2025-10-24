import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'veranda',
  // НЕ ИСПОЛЬЗУЕМ МИКРОФРОНТЕНДЫ. ИМПОРТ SHELL ИЗ БИБЛИОТЕКИ
  remotes: [],
};

export default config;
