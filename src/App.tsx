import './App.css';
import * as echarts from 'echarts';
import { ComposeOption } from 'echarts/core';
// import { pnpmAnalyze } from './cli/commands/pnpm-analyze';
import { useEffect, useRef } from 'react';
// import { IDependency } from './cli/utils/interface/depJson';
type ECOption=ComposeOption<
  |echarts.GraphSeriesOption
>
function App() {
  const chartRef = useRef(null);
  // 是否渲染chart
  const renderRef=useRef(false);
  // const PACKAGE_PATH = './src/tests/npm-enviroment-test/package.json';
  // const [jsondata, multipleVesion] = pnpmAnalyze(PACKAGE_PATH);
  // 获取从后端传来的依赖关系数据
  const dependencyData = fetchDependencyData(); // 假设从后端获取的数据是一个 JSON 对象
  function fetchDependencyData() {
    // 发起端请求获取数据，这里只是一个示例

    return {
      nodes: [
        { id: 'package1', value: '1.0.0' },
        { id: 'package2', value: '2.0.0' },
        { id: 'package3', value: '1.5.0' },
      ],
      links: [
        { source: 'package1', target: 'package2' },
        { source: 'package1', target: 'package3' },
      ],
    };
  }

  useEffect(() => {
    // console.log("renderRef",renderRef.current)
    if(renderRef.current){
        return
    }
    renderRef.current=true
    
    // 初始化echarts实例
    const chart = echarts.init(chartRef.current);
   const option = {
      title: {
        text: "Les Miserables",
        subtext: "Default layout",
        top: "bottom",
        left: "right"
      },
      tooltip: {},
      legend: [{
        data: ["类目0", "类目1", "类目2", "类目3", "类目4", "类目5", "类目6", "类目7", "类目8"]
      }],
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [{
        name: "Les Miserables",
        type: "graph",
        layout: "force",
        data: [{
          id: "0",
          name: "version",
          symbolSize: 19.12381,
          value: "1.2.1",
    
        }, {
          id: "1",
          name: "Napoleon",
          symbolSize: 2.6666666666666665,
          x: -83.616688,
          y: 89.37706,
          value: 4,
          category: 0
        }, {
          id: "2",
          name: "MlleBaptistine",
          symbolSize: 6.323809333333333,
          x: -42.552713999999995,
          y: 49.058352,
          value: 9.485714,
          category: 1
        },],
        links: [{
          id: "0",
          source: "1",
          target: "0"
        }, {
          id: "1",
          source: "2",
          target: "0"
        }, {
          id: "2",
          source: "3",
          target: "0"
        }, {
          id: "3",
          source: "3",
          target: "2"
        }],
        categories: [{
          name: "类目0"
        }, {
          name: "类目1"
        }, {
          name: "类目2"
        }, {
          name: "类目3"
        }, {
          name: "类目4"
        }, {
          name: "类目5"
        }, {
          name: "类目6"
        }, {
          name: "类目7"
        }, {
          name: "类目8"
        }]
      }]
    }
        // 指定图表的配置项和数据
      // const option: ECOption  = {
      //   title: {
      //     text: "Les Miserables",
      //     subtext: "Default layout",
      //     top: "bottom",
      //     left: "right"
      //   },
      //   tooltip: {},
      //   animationDuration: 1500,
      //   animationEasingUpdate: "quinticInOut",
      //   series: [{
      //     name: "Les Miserables",
      //     type: "graph",
      //     layout: "none",
      //     data:[
      //       { id: 'package1', value: '1.0.0' },
      //       { id: 'package2', value: '2.0.0' },
      //       { id: 'package3', value: '1.5.0' },
      //     ],
      //     links: dependencyData.links,
      //     categories: [{
      //       name: "类目0"
      //     }, {
      //       name: "类目1"
      //     }, {
      //       name: "类目2"
      //     }, {
      //       name: "类目3"
      //     }, {
      //       name: "类目4"
      //     }, {
      //       name: "类目5"
      //     }, {
      //       name: "类目6"
      //     }, {
      //       name: "类目7"
      //     }, {
      //       name: "类目8"
      //     }]
      //   }]
      // }
    chart.setOption(option as echarts.EChartOption)

    // 渲染依关系图
    // renderDependencyGraph(chart, dependencyData);

    // // 渲染依赖关系图
    // function renderDependencyGraph(
    //   chart: echarts.ECharts,
    //   data: { nodes: any; links: ILinks[] },
    // ) {
    //   // 指定图表的配置项和数据
    //   const option:echarts.EChartOption  = {
    //     title: {
    //       text: "Les Miserables",
    //       subtext: "Default layout",
    //       top: "bottom",
    //       left: "right"
    //     },
    //     tooltip: {},
    //     animationDuration: 1500,
    //     animationEasingUpdate: "quinticInOut",
    //     series: [{
    //       name: "Les Miserables",
    //       type: "graph",
    //       layout: "none",
    //       data:data.nodes,
    //       links: data.links,
    //       categories: [{
    //         name: "类目0"
    //       }, {
    //         name: "类目1"
    //       }, {
    //         name: "类目2"
    //       }, {
    //         name: "类目3"
    //       }, {
    //         name: "类目4"
    //       }, {
    //         name: "类目5"
    //       }, {
    //         name: "类目6"
    //       }, {
    //         name: "类目7"
    //       }, {
    //         name: "类目8"
    //       }]
    //     }]
    //   }

    //   // 使用配置渲染依赖关系图
    //   chart.setOption(option);
    //   // return () => {
    //   //   // 销毁图表实例，释放内存
    //   //   chart && chart.dispose();
    //   // };
    // }
  }, []);

  return (
    <div id="chart">
      <h1>Package Dependency Analysis</h1>
      <h2>Analysis Result:</h2>
      {chartRef.current}
      <div ref={chartRef} id="mycharts" style={{ height: '400px' }}></div>
      <p>Has Circular Dependency:{false} </p>
      <p>Has Multiple Versions :</p>
    </div>
  );
}

export default App;
