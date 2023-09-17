import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    //new
    build: {
      target: 'esnext'
    },
    
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: isProduction ? '/3D-jimmy/' : '/'
    ,assetsInclude: ['**/*.glb'],
  };
});
