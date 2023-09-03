// 输出的json数据结构
export interface IDependency {
  [propName: string]: {
    version: string;
    dependencies: IDependency;
  };
}
export interface INode {
  id: string;
  value: string;
  name: string;
}
export interface ILinks {
  source: string;
  target: string;
}
export interface IMutileVersion {
  [propName: string]: string[];
}
