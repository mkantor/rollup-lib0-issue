import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'main.js',
  output: { file: 'dist.js' },
  plugins: [nodeResolve({ exportConditions: ['node'] })],
}
