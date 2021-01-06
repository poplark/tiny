import json from '@rollup/plugin-json';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import * as path from 'path';
import tsconfig from './tsconfig.base.json';

export default {
  input: 'src/index.ts',
  // output: [
  //   {
  //     format: 'umd',
  //     // dir: path.parse(main).dir,
  //     file: main,
  //     name,
  //   },
  //   {
  //     format: 'esm',
  //     // dir: path.parse(module).dir,
  //     file: module,
  //     // }, {
  //     //   format: 'cjs',
  //     //   dir: 'cjs',
  //     // }, {
  //     //   dir: 'iffe',
  //     //   format: 'iife',
  //     //   name: 'myRollup',
  //   },
  // ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({
      tsconfigDefaults: tsconfig,
      useTsconfigDeclarationDir: true,
    }),
    // replace({
    //   __VERSION__: JSON.stringify(version),
    // }),
  ],
};
