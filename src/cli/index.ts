import { Command } from 'commander';
import chalk from 'chalk';
import { pnpmAnalyze } from './commands/pnpm-analyze.ts';
import { generateJsonFile } from './commands/generateJsonFile.ts';
import { generateDepth } from './commands/depth.ts';
import * as fs from "fs";
import { generateServer } from 'server/index.ts';


(async () => {
  const program = new Command();
  program
    .name('pkganalyzer-cli')
    .description('CLI to some JavaScript string utilities')
    .version('0.1.0');

  program
    .command('analyzer-cli')
    .description('analyze npm package')
    .option('--pnpmAnalyze', 'analyze pnpm package')
    .option('--json [file-path]','change json to file')
    .option('--depth <char>',"output the deoth of json ")
    .action(async (options) => {

        const PACKAGE_PATH = './src/tests/npm-environment-test/package.json';
        const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
        // console.log(`\r\n ${chalk.green(`json  data structure is as belows`)}\r\n `);
        // console.log(jsondata);
        if( Object.keys(multipleVesion).length>0){
          console.log(chalk.green(`has multiple version`));
          console.log(multipleVesion);
        }else{
          console.log(chalk.green("no multiple version"));
        }
        if(options.depth){
          console.log(chalk.green("depth:"+options.depth))
          const result=await generateDepth(parseInt(options.depth),jsondata);
          console.log(result)
          fs.writeFile("./depthdata.json", JSON.stringify(result), () => {
            console.error("generate json data to ./depthdata.json");
          });
        }
        if(options.json!==undefined){
          console.log(
            `${chalk.green(
              "if you don't have the value of filepath,it will use './data.json' for default path",
            )}`,
          );
          await generateJsonFile(jsondata,options.json)
          console.log(chalk.green("generate data sucessfully"))
          return;
        }
        await generateServer()
  
    });


  await program.parseAsync(process.argv);
})().catch((err: Error) => {
  console.error(`${chalk.red(err.message)}`);
  process.exit(1);
});
