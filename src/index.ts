import { Command } from 'commander';
import chalk from 'chalk';
export function main() {
  const program = new Command();

  // 配置帮助信息
  program.on('--help', () => {
    console.log(`\r\n Run ${chalk.green(`dyi <command> --help`)} to understand the details\r\n `);
  });
  program.parse();
}
main();
