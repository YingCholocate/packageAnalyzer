# 文档结构介绍

- husky 设置 git 提交相关
- bin cli 工具入口，指向的是 build 文件夹的 index.js 文件,在 package.json 配置了相关的 bin 选项。
- build ts 文件编译成 js 文件的地方
- src
- tests 用于存放单元测试文件
- types typescript 声明文件
- index.ts 入口文件
- cli
- commands 用来存放自定义的命令，如--help --list 等，最后在 index.ts 引入
- utils 存放公共函数等
- charts 存放图表前端
- ui 存放 ui 等组件

# 启动方式介绍

- 使用的是 pnpm，执行 pnpm install
- pnpm run dev，启动网页，pnpm run server，启动服务器，注释 open 的代码
- 执行 npm link 或 pnpm install （可能需要使用管理员执行命令行）
- 即可使用 analyzer-cli --help 等命令

# 测试的方法

- 在 tests 文件夹下，新建一个文件夹，然后选择在该文件夹下进行包版本管理，控制台切换至该目录，执行 pnpm add glob
  执行 ts-node src/index.ts analyzer-cli --separator=/ a/b/c --pnpmAnalyze 输出分析结果

# 使用技术栈介绍

- 使用 tsc 进行编译
- Commander 命令行

# 踩坑

- node.js - Nestjs readFileSync 返回无法读取未定义的属性 'readFileSync'
- - 使用的是 Typescript 和 fs 没有默认导出，你必须使用 import \* as fs from 'fs'
