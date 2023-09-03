import './App.css';
import * as echarts from 'echarts';
import { ComposeOption } from 'echarts/core';
import { useEffect, useRef, useState } from 'react';
import { getAllData, getDepyhData } from './api';
import { IDependency, ILinks, IMutileVersion, INode } from './interfaces';
import TreeEcharts from './component/TreeEcharts';

type ECOption = ComposeOption<echarts.GraphSeriesOption>;

function App() {
  const chartRef = useRef(null);
  const myChart = useRef<echarts.ECharts>();
  // 是否渲染chart
  const renderRef = useRef(false);
  const [renderData, setRenderData] = useState<{ chartNode: INode[]; chartLink: ILinks[] }>();
  const [allData, setAllData] = useState<IMutileVersion>();
  useEffect(() => {
    if (renderRef.current) {
      return;
    }
    renderRef.current = true;
    // 初始化echarts实例
    myChart.current = echarts.init(chartRef.current);
    myChart.current?.showLoading();
    const getData = async () => {
      const data = await getAllData();
      setAllData(data.multipleVesion);

      const option: ECOption = {
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        // legend: [
        //   {
        //     data: data.chartNode.map(function (a) {
        //       return a.name;
        //     }),
        //   },
        // ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: data.chartNode,
            links: data.chartLink,
            // categories: [
            //   ...data.chartNode.map(function (a) {
            //     return { name: a.name };
            //   }),
            // ],
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}',
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3,
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10,
              },
            },
          },
        ],
      };

      myChart.current && myChart.current.setOption(option as echarts.EChartOption);
      myChart.current?.hideLoading();
    };
    getData();
  }, []);

  useEffect(() => {
    if (renderRef.current) {
      return;
    }
    renderRef.current = true;
    myChart.current &&
      myChart.current.setOption({
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: renderData?.chartNode,
            links: renderData?.chartLink,
          },
        ],
      });
  }, [renderData]);
  const changeDepth = async (event: any) => {
    if (!event.target.value) return;
    const result = await getDepyhData(parseInt(event.target.value));
    setRenderData({ chartNode: result.chartNode, chartLink: result.chartLink });
    renderRef.current = false;
  };

  return (
    <div id="chart">
      <h1>Package Dependency Analysis</h1>
      <h2>Analysis Result:</h2>
      <div className="rowflex">
        <p>depth</p>
        <input type="number" onChange={changeDepth}></input>
      </div>
      <div ref={chartRef} id="mycharts" style={{ height: '400px' }}></div>
      <p>Has Circular Dependency:</p>
      {/* <div>{{ allData }}</div> */}
      <p>Has Multiple Versions :</p>
      {allData && <TreeEcharts multipleVersion={allData} />}
    </div>
  );
}

export default App;
