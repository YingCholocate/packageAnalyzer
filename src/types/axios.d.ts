// 新建 axios.d.ts
import { IDependency, ILinks, IMutileVersion, INode } from '@/interfaces/insw';
declare module 'axios' {
  interface IAxios {
    chartNode: INode[];
    chartLink: ILinks[];
    jsondata: IDependency;
    multipleVesion: IMutileVersion;
  }
  export interface AxiosResponse<>extends IAxios {}
}
