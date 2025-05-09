import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_menu',
      exposes: {
        './menu': './src/components/menu.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3002,
  },
});