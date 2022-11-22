const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const external = require('rollup-plugin-peer-deps-external');

const packageJson = require('./package.json');

const config =  [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      }, {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser()
    ]
  }
]

module.exports = config;