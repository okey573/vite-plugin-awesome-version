import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.js',
    },
    {
      file: 'dist/index.min.js',
      plugins: [terser()]
    }
  ],
  plugins: [nodeResolve()]
}
