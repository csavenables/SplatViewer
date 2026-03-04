import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SplatViewer/',
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
  },
});
