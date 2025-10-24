import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  // НЕ ИСПОЛЬЗУЕМ МИКРОФРОНТЕНДЫ. ИМПОРТ SHELL ИЗ БИБЛИОТЕКИ
  exposes: {},
};

export default config;
