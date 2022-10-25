#! /usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
// 解析用户执行时输入的参数
// process.argv 是 nodejs 提供的属性
// npm run server --port 3000
// 后面的 --port 3000 就是用户输入的参数
console.log(`${chalk.green.bold("Welcome to use Yunding-Cli")}`);
console.log(chalk.blue("\r\n振翅云顶之上，极目星辰大海"));
console.log(
  chalk.green(
    "\r\nThe service is starting"
  )
);
program
    .name("Yunding-Cli")
    .usage(`<command> [option]`)
    .version(`Yunding-Cli ${require("../package.json").version}`)
program
  .command("create <project-name>") // 增加创建指令
  .description("创建一个新的项目模板") // 添加描述信息
  .option("-f, --force", "如果目录存在，是否将其强制覆盖") // 强制覆盖
  .action((projectName, cmd) => {
    // 处理用户输入create 指令附加的参数
      require("../lib/create")(projectName, cmd);
  });
program
  .command("config [value]") // config 命令
  .description("inspect and modify the config")
  .option("-g, --get <key>", "get value by key")
  .option("-s, --set <key> <value>", "set option[key] is value")
  .option("-d, --delete <key>", "delete option by key")
  .action((value, keys) => {
    // value 可以取到 [value] 值，keys会获取到命令参数
    console.log(value, keys);
  });

program.on("--help", function () {
  // 前后两个空行调整格式，更舒适
  console.log();
  console.log(
    `Run ${chalk.cyan(
      "Yunding-Cli <command> --help"
    )} for detailed usage of given command.`
  );
  console.log();
});


program.parse(process.argv);