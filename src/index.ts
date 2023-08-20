import { Command } from 'commander';
import chalk from 'chalk';
import { pnpmAnalyze } from './cli/commands/pnpm-analyze';
export function main() {
  const program = new Command();

  // 配置帮助信息
  program.on('--help', () => {
    console.log(`\r\n Run ${chalk.green(`dyi <command> --help`)} to understand the details\r\n `);
  });
  const PACKAGE_PATH = '../../../src/tests/npm-enviroment-test/package.json';
  program.on('--pnpmAnalyze', () => {
    const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
    console.log(`\r\n ${chalk.green(`json  data structure is as belows`)}\r\n `);
    console.log(jsondata);
    console.log(`\r\n ${chalk.green(`has multiple version`)}\r\n `);
    console.log(multipleVesion);
  });
}
main();
