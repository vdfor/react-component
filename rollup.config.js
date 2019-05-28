import fs from 'fs';
import path from 'path';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

const appDirectory = path.join(fs.realpathSync(process.cwd()), './');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externals = Object.keys(pkg.peerDependencies);
const moduleNames = fs.readdirSync(resolveApp('src')).filter(i => !/(index.ts|.d.ts|setupTests.ts)$/.test(i));
const moduleMap = moduleNames.reduce((prev, name) => {
  prev[name] = resolveApp(`src/${name}/index.tsx`);
  return prev;
}, {});
const nodeEnv = process.env.NODE_ENV || 'development';

export default {
  input: {
    index: resolveApp('src/index.ts'),
    ...moduleMap
  },
  output: [
    {
      dir: resolveApp('dist/es'),
      format: 'es',
      entryFileNames: '[name]/index.js',
      sourcemap: nodeEnv === 'development',
      exports: 'named'
    }
  ],
  external: id => externals.some(e => id.indexOf(e) === 0),
  plugins: [
    nodeEnv === 'production' && clear({
      targets: [resolveApp('dist')]
    }),
    eslint({
      fix: true
    }),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectory: [resolveApp('src')],
      }
    }),
    babel({
      exclude: /node_modules/,
      runtimeHelpers: true,
      extensions,
      babelrc: true
    })
  ],
}