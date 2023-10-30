import { IMutileVersion } from '@/interfaces';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ComposeOption } from 'echarts/core';
export default function TreeEcharts(props: { multipleVersion: IMutileVersion }) {
  const { multipleVersion } = props;
  type ECOption = ComposeOption<echarts.TreeSeriesOption>;

  const treeRef = useRef(null);

  const renderRef = useRef(false);
  const myChart = useRef<echarts.ECharts>();
  useEffect(() => {
    if (renderRef.current) {
      return;
    }
    renderRef.current = true;
    myChart.current = echarts.init(treeRef.current);
    myChart.current?.showLoading();
    const data = Object.keys(multipleVersion).map((dep: string) => {
      return {
        name: dep,
        children: [
          ...multipleVersion[dep].map((item) => {
            return { name: item };
          }),
        ],
      };
    });
    const treedata = { name: 'root', children: data };
    const option: ECOption = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },

      series: [
        {
          type: 'tree',
          name: 'tree1',
          data: [treedata],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },
          emphasis: {
            focus: 'descendant',
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
    // @ts-ignore
    option && myChart.current.setOption(option as echarts.EChartsOption<Series>);
    myChart.current?.hideLoading();
  }, [multipleVersion]);

  return <div ref={treeRef} id="myTreecharts" style={{ height: '400px' }}></div>;
}
