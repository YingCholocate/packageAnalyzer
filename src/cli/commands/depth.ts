import { IDependency } from "@/interfaces";

export const generateDepth=(depth:number,jsonData:IDependency):IDependency=>{
    const result:IDependency={};
  
    for (const [depName, dependencies] of Object.entries(jsonData)) {
        result [depName] = { version: dependencies.version, dependencies: {} };
        if(depth==1) return  result;
        result[depName].dependencies=generateDepth(depth-1,jsonData[depName].dependencies);
        
    }
    
    return result;
}
