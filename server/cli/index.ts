import { generateServer } from '../index.js';
import { Command } from 'commander';
import chalk from 'chalk';
import { generateDepth } from './commands/depth.js';
import { generateJsonFile } from './commands/generateJsonFile.js';
import * as fs from 'fs';
import { pnpmAnalyze } from './commands/pnpm-analyze.js';
import { PACKAGE_PATH } from '../../server/util.js';

(async () => {
  const program = new Command();
  program
    .name('pkg-analyzer')
    .description('CLI to some JavaScript string utilities')
    .version('0.1.0');

  program
    .command('analyze')
    .description('analyze npm package')
    .option('--pnpmAnalyze', 'analyze pnpm package')
    .option('--json [file-path]', 'change json to file')
    .option('--depth <char>', 'output the deoth of json ')
    .action(async (options) => {
      const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
      if (Object.keys(multipleVesion).length > 0) {
        console.log(chalk.green(`has multiple version`));
        console.log(multipleVesion);
      } else {
        console.log(chalk.green('no multiple version'));
      }
      if (options.depth) {
        console.log(chalk.green('depth:' + options.depth));
        const result = await generateDepth(parseInt(options.depth), jsondata);
        console.log(result);
        fs.writeFile('./depthdata.json', JSON.stringify(result), () => {
          console.log('generate json data to ./depthdata.json');
        });
      }
      if (options.json !== undefined) {
        console.log(
          `${chalk.green(
            "if you don't have the value of filepath,it will use './data.json' for default path",
          )}`,
        );
        await generateJsonFile(jsondata, options.json);
        console.log(chalk.green('generate data sucessfully'));
        return;
      }
      await generateServer();
    });

  await program.parseAsync(process.argv);
})().catch((err: Error) => {
  console.error(`${chalk.red(err.message)}`);
  process.exit(1);
});
