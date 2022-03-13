import {defineConfig} from 'vite'
import {transformScript} from "./src";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    transformScript({
      input:'./public/icon/',
      type:'ts',
      format:'default'
    })
  ], /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  // outDir: 'dist',
  // 配置库打包
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})

