// 输出的json数据结构
export interface IDependency {
    [propName: string]: {
      version: string;
      dependencies: IDependency;
    };
  }