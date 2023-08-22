# 文档结构介绍

-husky 设置git提交相关
-bin cli工具入口，指向的是build文件夹的index.js文件,在package.json配置了相关的bin选项。
-build ts文件编译成js文件的地方
-src
/tests 用于存放单元测试文件
/types typescript声明文件
/index.ts 入口文件
/cli
//commands 用来存放自定义的命令，如--help --list等，最后在index.ts引入
//utils 存放公共函数等
//charts 存放图表前端
---ui 存放ui等组件

# 启动方式介绍

- 使用的是pnpm，执行pnpm install
- pnpm run build:tsc 生成build文件夹
- 执行npm link 或pnpm link -g （可能需要使用管理员执行命令行）
- 即可使用 analyzer-cli --help等命令

# 测试的方法

- 在tests文件夹下，新建一个文件夹，然后选择在该文件夹下进行包版本管理，控制台切换至该目录，执行pnpm add glob
  执行 ts-node src/index.ts analyzer-cli --separator=/ a/b/c --pnpmAnalyze输出分析结果

# 使用技术栈介绍

- 使用tsc 进行编译
- Commander 命令行

# 踩坑

- node.js - Nestjs readFileSync 返回无法读取未定义的属性 'readFileSync'
- - 使用的是 Typescript 和 fs没有默认导出，你必须使用 import \* as fs from 'fs'
