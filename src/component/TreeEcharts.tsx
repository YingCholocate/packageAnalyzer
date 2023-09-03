import { IMutileVersion } from '@/interfaces';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ComposeOption } from 'echarts/core';
export default function TreeEcharts(props: { multipleVersion: IMutileVersion }) {
  const { multipleVersion } = props;
  type ECOption = ComposeOption<echarts.TreeSeriesOption>;
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
  console.log(data);
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

    const option: ECOption = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },

      series: [
        ...data.map((d) => {
          return {
            type: 'tree',
            data: d,
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
          };
        }),
      ],
    };
    option && myChart.current.setOption(option as echarts.EChartOption);
    myChart.current?.hideLoading();
  }, []);

  return <div ref={treeRef} id="myTreecharts" style={{ height: '400px' }}></div>;
}
