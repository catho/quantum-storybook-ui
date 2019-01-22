import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import svg from 'rollup-plugin-svg';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import cleanup from 'rollup-plugin-cleanup';
import visualizer from 'rollup-plugin-visualizer';
import builtins from 'rollup-plugin-node-builtins';

import pkg from './package.json';

export default [
  {
    input: 'lib/index.js',
    external: ['react', 'styled-components'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      css(),
      svg(),
      url({
        include: ['**/*.ttf'],
      }),
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      resolve({
        extensions: ['.js', '.jsx'],
        jsnext: true,
        main: true,
        preferBuiltins: false,
      }),
      commonjs({
        namedExports: {
          react: ['Component', 'createElement'],
        },
      }),
      builtins(),
      filesize(),
      cleanup(),
      visualizer(),
    ],
  },
];
