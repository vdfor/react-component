import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const appDirectory = path.join(fs.realpathSync(process.cwd()), './');
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const moduleNames = fs.readdirSync(resolveApp('src')).filter((i) => !/(index.ts|.d.ts|util.ts|setupTests.ts)$/.test(i));
const moduleMap = moduleNames.reduce((initPrev, name) => {
  const prev = initPrev;
  try {
    const stat = fs.statSync(resolveApp(`src/${name}/index.ts`));
    prev[name] = stat && stat.isFile() ? resolveApp(`src/${name}/index.ts`) : resolveApp(`src/${name}/index.tsx`);
  } catch (error) {
    prev[name] = resolveApp(`src/${name}/index.tsx`);
  }
  return prev;
}, {});
const nodeEnv = process.env.NODE_ENV || 'development';

const commonOutputOpts = {
  entryFileNames: '[name]/index.js',
  sourcemap: nodeEnv === 'development',
  exports: 'named',
};

export default {
  input: {
    index: resolveApp('src/index.ts'),
    ...moduleMap,
  },
  output: [
    {
      dir: resolveApp('dist/es'),
      format: 'esm',
      ...commonOutputOpts,
    },
    {
      dir: resolveApp('dist/lib'),
      format: 'commonjs',
      ...commonOutputOpts,
    },
  ],
  // external: id => externals.some(e => id.indexOf(e) === 0),
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    eslint({
      fix: true,
    }),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectory: [resolveApp('src')],
      },
    }),
    babel({
      exclude: /node_modules/,
      runtimeHelpers: true,
      extensions,
      babelrc: false, // use babel.config.js
    }),
  ],
};
