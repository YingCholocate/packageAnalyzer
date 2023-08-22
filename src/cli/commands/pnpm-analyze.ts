import * as fs from 'fs';
interface IPackage {
  dependencies?: { [propName: string]: string }; // "@types/node": "^20.4.10",
  devDependencies?: { [propName: string]: string };
}
// 输出的json数据结构
interface IDependency {
  [propName: string]: {
    version: string;
    dependencies: IDependency;
  };
}
interface IMutileVersion {
  [propName: string]: string[];
}
// 分析依赖
function analyzeDependencies(
  packageJson: IPackage,
  jsonDependency: IDependency = {},
  checkedDependency = new Map(),
  multipleVession: IMutileVersion = {},
) {
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};
  const allDependencies = { ...dependencies, ...devDependencies };

  for (const [dep, version] of Object.entries(allDependencies)) {
    // console.log(`Dependency: ${dep}@${version}`);
    jsonDependency[dep] = { version: version, dependencies: {} };
    // 检查是否存在多个版本
    [, multipleVession] = hasCircularDependency(
      dep,
      version,
      jsonDependency,
      checkedDependency,
      multipleVession,
    );
    // TODO 需要更改路径，生产环境
    const depPackageJsonPath = `./src/tests/npm-enviroment-test/node_modules/${dep}/package.json`;

    // 检查是否存在多个版本;
    if (fs.existsSync(depPackageJsonPath)) {
      const depPackageJson = JSON.parse(fs.readFileSync(depPackageJsonPath, 'utf8'));
      const subDependencies = {
        ...depPackageJson.dependencies,
        ...depPackageJson.devDependencies,
      };
      //   console.log(subDependencies);
      if (Object.keys(subDependencies).length > 0) {
        analyzeDependencies(
          depPackageJson,
          jsonDependency[dep].dependencies,
          checkedDependency,
          multipleVession,
        );
      }
    }
  }
  return [jsonDependency, multipleVession];
}
//  分析是否有循环引用
// function cycle(obj: IDependency, parent = undefined) {
//   //表示调用的父级数组
//   const parentArr = parent || [obj];
//   for (const i in obj) {
//     if (typeof obj[i] === 'object') {
//       //判断是否有循环引用
//       parentArr.forEach((pObj) => {
//         if (pObj === obj[i]) {
//           obj[i] = '[cycle]';
//         }
//       });

//       cycle(obj[i], [...parentArr, obj[i]]);
//     }
//   }
//   return obj;
// }

function hasCircularDependency(
  dependencyName: string,
  version: string,
  dependencyMap: IDependency,
  checkedDependencies: Map<string, string>,
  multipleVesion: IMutileVersion,
): [boolean, IMutileVersion] {
  if (checkedDependencies.has(dependencyName)) {
    // 存在循环化引用
    const nameVersion = checkedDependencies.get(dependencyName);
    if (nameVersion !== version) {
      if (multipleVesion[dependencyName]) {
        multipleVesion[dependencyName] = [...new Set([...multipleVesion[dependencyName], version])];
      } else {
        multipleVesion[dependencyName] = [nameVersion as string, version];
      }
    }
    return [true, multipleVesion];
  }

  checkedDependencies.set(dependencyName, dependencyMap[dependencyName].version);
  return [false, multipleVesion];
}

export const pnpmAnalyze = (packageJsonPath: string) => {
  // main方法

  const data = fs.readFileSync(packageJsonPath, 'utf8');
  //  读取package.json文件的内容
  const config = JSON.parse(data);
  console.log(config);
  const [jsondata, multipleVesion] = analyzeDependencies(config);

  // const [, circleObj] = cycle(jsondata);
  // console.log(circleObj);
  return [jsondata, multipleVesion];
};
