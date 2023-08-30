
import open from "open"
import path,{dirname} from "path";
import express from "express"
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url))
console.log("__dirname",__dirname);
const fullName = path.basename(__dirname);
console.log("fullName",fullName)
export const generateServer=()=>{
    const app = express();
    // 中间件处理
    app.use(express.static(path.join(__dirname)));
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
    
    app.get('/', (_, res) => {
      // 开发环境
      // if(){
      //   res.sendFile(path.join(__dirname,  '../','index.html'));
      // }else{
      //   // 打包编译
        res.sendFile(path.join(__dirname,  './public'));
      // }
    
    });
    open("http://localhost:3000/")
}
generateServer()