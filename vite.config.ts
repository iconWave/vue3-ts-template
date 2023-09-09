import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env)
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      visualizer({
        open: true, //在默认用户代理中打开生成的文件
        gzipSize: true, // 收集 gzip 大小并将其显示
        brotliSize: true, // 收集 brotli 大小并将其显示
        filename: 'stats.html', // 分析图生成的文件名
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7, // 设置GIF图片的优化等级为7
          interlaced: false, // 不启用交错扫描
        },
        optipng: {
          optimizationLevel: 7, // 设置PNG图片的优化等级为7
        },
        mozjpeg: {
          quality: 20, // 设置JPEG图片的质量为20
        },
        pngquant: {
          quality: [0.8, 0.9], // 设置PNG图片的质量范围为0.8到0.9之间
          speed: 4, // 设置PNG图片的优化速度为4
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox', // 启用移除SVG视图框的插件
            },
            {
              name: 'removeEmptyAttrs',
              active: false, // 不启用移除空属性的插件
            },
          ],
        },
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      https: false,
      proxy: {},
    },
    build: {
      rollupOptions: {
        output: {
          // 设置chunk的文件名格式
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          // eslint-disable-next-line camelcase
          drop_console: true,
          // eslint-disable-next-line camelcase
          drop_debugger: true,
        },
      },
    },
  })
}
