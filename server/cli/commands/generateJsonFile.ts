import { IDependency } from '@/interfaces';
import * as fs from 'fs';
export const generateJsonFile = (jsonData:IDependency, filePath:string) => {
  // 如果没有输入filePath，默认路径
  if (typeof filePath==="boolean") {
    filePath = './data.json';
  }
  fs.writeFile(filePath as string, JSON.stringify(jsonData), () => {
    // console.error(err);
  });
};
