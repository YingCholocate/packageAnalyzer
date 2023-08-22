import { Command } from 'commander';
import chalk from 'chalk';
import { pnpmAnalyze } from './cli/commands/pnpm-analyze';
(async () => {
  const program = new Command();
  program
    .name('pkganalyzer-cli')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');

  program
    .command('analyzer-cli')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .option('--pnpmAnalyze', 'analyze pnpm package')
    .action((str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
      if (options.pnpmAnalyze) {
        console.log('111');
        const PACKAGE_PATH = './src/tests/npm-enviroment-test/package.json';
        const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
        console.log(`\r\n ${chalk.green(`json  data structure is as belows`)}\r\n `);
        console.log(jsondata);
        console.log(`\r\n ${chalk.green(`has multiple version`)}\r\n `);
        console.log(multipleVesion);
      }
    });

  // const PACKAGE_PATH = '../../../src/tests/npm-enviroment-test/package.json';
  // program.on('option:pnpmAnalyze', () => {
  //   const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
  //   console.log(`\r\n ${chalk.green(`json  data structure is as belows`)}\r\n `);
  //   console.log(jsondata);
  //   console.log(`\r\n ${chalk.green(`has multiple version`)}\r\n `);
  //   console.log(multipleVesion);
  // });

  await program.parseAsync(process.argv);
})().catch((err: Error) => {
  console.error(`${chalk.red(err.message)}`);
  process.exit(1);
});
