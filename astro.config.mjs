import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  adapter: nodejs(),
  output: 'hybrid',
  integrations: [tailwind(), react()],
});
