import { defineConfig } from 'tsup';

export default defineConfig(() => {
  const isDev = process.env.NODE_ENV === 'development';

  return {
    entry: ['src/index.ts'],
    format: ['esm'],
    target: 'es2020',
    sourcemap: true,
    clean: !isDev,
    watch: isDev ? ['src'] : false,
    onSuccess: isDev ? 'node dist/index.js' : undefined,
  };
});
