import open from 'open';
import path, { dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { PACKAGE_PATH } from './util.js';
import { pnpmAnalyze } from './cli/commands/pnpm-analyze.js';
import { generateDepth } from './cli/commands/depth.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const generateServer = () => {
  const app = express();
  // 中间件处理
  app.use(express.static(path.join(__dirname)));

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  app.use('/', express.static(path.join(__dirname, './public')));
  open('http://localhost:3000/');
  app.get('/data', (_, res) => {
    const [jsondata, multipleVesion, chartNode, chartLink] = pnpmAnalyze(PACKAGE_PATH);
    res.json({
      jsondata: jsondata,
      multipleVesion: multipleVesion,
      chartNode: chartNode,
      chartLink: chartLink,
    });
  });

  app.get('/depth', (req, res) => {
    const depth: string = req.query.depth as string;
    const [jsondata] = pnpmAnalyze(PACKAGE_PATH);
    const result = generateDepth(parseInt(depth), jsondata);
    res.json(result);
  });

  app.get('/search', (_, res) => {
    res.json();
  });
};
