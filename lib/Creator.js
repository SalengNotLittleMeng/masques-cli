const inquirer = require("inquirer");
const downloadGitRepo = require("download-git-repo");
const chalk = require("chalk");
const util = require("util");
const path = require("path");
const { loading } = require("./util");
const figlet=require('figlet')
const execa = require('execa');
const fs = require('fs')
class Creator {
  constructor(name, target) {
    this.name = name;
    this.target = target;
    // 转化为 promise 方法
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }
  // 创建项目部分
  async create() {
    // 下载模板
    await this.download();
    // 模板使用提示
    console.log(`\r\n ${chalk.green('Successfully')} created project ${chalk.cyan(this.name)}`);
    console.log(
    "\r\n" +
        figlet.textSync("YunDing", {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: false,
        })
    );
    console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
    console.log(`  npm install ${chalk.cyan('or')} yarn `);
    console.log("  npm run serve\r\n");
  }
  // 获取模板信息及用户选择的模板
  // 下载git仓库
  async download(repo, tag) {
    // 模板下载地址
    // await execa(`git`, ['clone', 'https://gitee.com/yan-taomeng/vue-cli.git'], { cwd: './', })
    const templateUrl = `SalengNotLittleMeng/Handy-Vue-Cli`;
    // 调用 downloadGitRepo 方法将对应模板下载到指定目录
    await loading(
      "downloading template, please wait",
      this.downloadGitRepo,
      templateUrl,
      path.resolve(process.cwd(), this.target) // 项目创建位置
    );
  }
}

module.exports = Creator;