import { IDependency, ILinks, INode } from '../../interfaces/index.js';

export const generateDepth = (
  depth: number,
  jsonData: IDependency,
  chartNode: INode[] = [],
  chartLink: ILinks[] = [],
  checkedDependency = new Map(),
) => {
  const result: IDependency = {};

  for (const [depName, dependencies] of Object.entries(jsonData)) {
    result[depName] = { version: dependencies.version, dependencies: {} };
    if (!checkedDependency.has(depName))
      chartNode.push({ id: depName, name: depName, value: dependencies.version });
    if (Object.keys(dependencies.dependencies).length > 0) {
      Object.keys(dependencies.dependencies).map((key) => {
        chartLink.push({ source: depName, target: key });
      });
    }
    checkedDependency.set(depName, dependencies.version);
    if (depth == 1) return { result, chartNode, chartLink };

    result[depName].dependencies = generateDepth(
      depth - 1,
      jsonData[depName].dependencies,
      chartNode,
      chartLink,
      checkedDependency,
    ).result;
  }

  return { result, chartNode, chartLink };
};
