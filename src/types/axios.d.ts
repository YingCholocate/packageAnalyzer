// 新建 axios.d.ts
// import { IDependency, ILinks, IMutileVersion, INode } from '@/interfaces/insw';
import axios from 'axios';

declare module 'axios' {
  interface IAxios<D = null> {
    chartNode: INode[];
    chartLink: ILinks[];
    jsondata: IDependency;
    multipleVesion: IMutileVersion;
  }
  export interface AxiosResponse<T = any> extends IAxios<D> {}
}
