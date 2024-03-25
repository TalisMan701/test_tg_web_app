import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  resolve: {
    alias: {
      '~app': path.resolve(__dirname, './src/app/'),
      '~entities': path.resolve(__dirname, './src/entities/'),
      '~features': path.resolve(__dirname, './src/features/'),
      '~pages': path.resolve(__dirname, './src/pages/'),
      '~processes': path.resolve(__dirname, './src/processes/'),
      '~shared': path.resolve(__dirname, './src/shared/'),
      '~widgets': path.resolve(__dirname, './src/widgets/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/shared/assets/styles/_global-import" as *;',
      },
    },
  },
});
