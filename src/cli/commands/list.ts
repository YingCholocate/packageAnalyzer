import chalk from 'chalk';
// import Conf from 'conf';

export const list = () => {
  //   const config = new Conf();
  //   const todoList = config.get('todo-list');

  //   if (todoList && todoList.length) {
  //     console.log(chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.'));
  //     todoList.forEach((task: { done: object; text: string }, index: string) => {
  //       if (task.done) {
  //         console.log(chalk.greenBright(`${index}. ${task.text}`));
  //       } else {
  //         console.log(chalk.yellowBright(`${index}. ${task.text}`));
  //       }
  //     });
  //   } else {
  console.log(chalk.red.bold("You don't have any tasks yet."));
  //   }
};
