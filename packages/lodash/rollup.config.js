import replace from '@rollup/plugin-replace';
import base from '../../rollup.base';
import { name, main, module, version } from './package.json';

const config = {
  ...base,
  // input: 'src/index.ts',
  output: [
    {
      format: 'umd',
      // dir: path.parse(main).dir,
      file: main,
      name,
    },
    {
      format: 'esm',
      // dir: path.parse(module).dir,
      file: module,
      // }, {
      //   format: 'cjs',
      //   dir: 'cjs',
      // }, {
      //   dir: 'iffe',
      //   format: 'iife',
      //   name: 'myRollup',
    },
  ],
  plugins: base.plugins.concat([
    replace({
      __VERSION__: JSON.stringify(version),
    }),
  ]),
};

export default config;
