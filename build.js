import * as esbuild from 'esbuild';
import { join } from 'path';
import { glob } from 'glob';
import chalk from 'chalk';
import fs from 'fs-extra';
const isProd = process.env.NODE_ENV == 'production';
const libPath = join(process.cwd(), 'build');

/** 假如lib文件夹已存在，则清空 */
if (fs.pathExistsSync(libPath)) {
  fs.emptyDirSync(libPath);
}

/** 匹配src文件夹下所有ts文件 */
const matchFiles = async () => {
  return await new Promise((resolve) => {
    glob('src/**/*.ts', { root: process.cwd() }, function (err, files) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      resolve(files);
    });
  });
};
/** esbuild 配置 */
const build = async function () {
  await esbuild.build({
    entryPoints: await matchFiles(),
    bundle: false,
    splitting: false,
    outdir: join(process.cwd(), 'build'),
    format: 'cjs',
    platform: 'node',
    minify: false,
    color: true,
    sourcemap: false,
    loader: {
      '.ts': 'ts',
    },
    watch: !isProd && {
      onRebuild(error) {
        if (error) {
          console.log(chalk.red(`watch build failed`));
        } else {
          console.log(chalk.green(`watch build succeeded`));
        }
      },
    },
  });
  console.log(chalk.green('success build \r\n'));
};
build();
