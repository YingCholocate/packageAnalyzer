export function hasCircularDependencyTrue(dependencies: any) {
  const queue = [];
  const inDegree = new Map();
  const graph = new Map();

  // 初始化图和入度
  for (const [key, value] of Object.entries(dependencies)) {
    inDegree.set(key, 0);

    graph.set(key, new Set(value as string));
  }

  // 计算入度
  for (const [, value] of graph) {
    for (const dep of value) {
      inDegree.set(dep, inDegree.get(dep) + 1);
    }
  }

  // 将入度为0的节点加入队列
  for (const [key, value] of inDegree) {
    if (value === 0) {
      queue.push(key);
    }
  }

  // 拓扑排序
  while (queue.length) {
    const node = queue.shift();
    for (const dep of graph.get(node)) {
      inDegree.set(dep, inDegree.get(dep) - 1);
      if (inDegree.get(dep) === 0) {
        queue.push(dep);
      }
    }
  }

  // 如果存在入度不为0的节点，则存在循环依赖
  for (const [, value] of inDegree) {
    if (value !== 0) {
      return true;
    }
  }

  return false;
}
interface IKeyValue {
  [propName: string]: any;
}
function flatten(obj: IKeyValue) {
  const ans: IKeyValue = {};
  const result: string[] = [];
  inner(obj, null);
  console.log(result);
  function inner(o: IKeyValue, prev: IKeyValue | string | null) {
    for (const key in o) {
      if (o[key] instanceof Object) {
        if (prev === null) {
          inner(o[key], key);
        } else {
          inner(o[key], prev + '.' + key);
        }
      } else {
        if (prev === null) {
          ans[key] = o[key];
        } else {
          ans[prev + '.' + key] = o[key];
          const prevArr = prev.split('.');

          if (
            (!result.includes(prev as string) && prevArr.includes(key)) ||
            prevArr.includes(o[key])
          ) {
            result.push(prev + '.' + key);
          }
        }
      }
    }
  }
  return ans;
}

// // 示例
const dependencies = {
  A: { D: { K: { A: 'E' } } },
  B: { E: 'B' },
  C: { F: 'H' },
};
const flaternDependecy = flatten(dependencies);
console.log(flaternDependecy);
// console.log(hasCircularDependencyTrue(dependencies)); // true
