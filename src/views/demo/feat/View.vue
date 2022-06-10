<template>
  <div style="background-color: #2c343c">
    <div id="myEcharts1" style="width: 600px; height: 400px"></div>
    <div id="myEcharts" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import { reactive, onMounted, ref, onUnmounted } from 'vue';
import * as echarts from 'echarts';

import { getClasses, getTechers } from '/@/api/sa/sa';
export default {
  setup () {
    // 背景颜色：#2c343c
    const dom = ref();
    const data = reactive({
      option: {
        backgroundColor: '#2c343c',
        title: {
          text: '人员统计',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '教务管理' },
              { value: 310, name: '老师' },
              { value: 274, name: '管理员' },
              { value: 400, name: '学生' },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      },
    });
    let echart = echarts;
    function init () {
      // 基于准备好的dom，初始化echarts实例
      let chart = echart.init(document.getElementById('myEcharts'), 'dark');
      // 把配置和数据放这里
      chart.setOption(data.option);
    }
    async function getT () {
      let res = await getClasses();
      console.log(res.data);
    }
    async function getC () {
      var app = {};

      var chartDom = document.getElementById('myEcharts1');
      var myChart = echarts.init(chartDom);
      var option;

      const categories = (function () {
        let now = new Date();
        let res = [];
        let len = 10;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
          now = new Date(+now - 2000);
        }
        return res;
      })();
      const categories2 = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })();
      const data = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }
        return res;
      })();
      const data2 = (function () {
        let res = [];
        let len = 0;
        while (len < 10) {
          res.push(+(Math.random() * 10 + 5).toFixed(1));
          len++;
        }
        return res;
      })();
      option = {
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#2c343c',
            },
          },
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: categories,
          },
          {
            type: 'category',
            boundaryGap: true,
            data: categories2,
          },
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '老师',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
          {
            type: 'value',
            scale: true,
            name: '学生',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
        ],
        series: [
          {
            name: '学生在线人数',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data,
          },
          {
            name: '预计点',
            type: 'line',
            data: data2,
          },
        ],
      };
      app.count = 11;
      setInterval(function () {
        let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
        data.shift();
        data.push(Math.round(Math.random() * 1000));
        data2.shift();
        data2.push(+(Math.random() * 10 + 5).toFixed(1));
        categories.shift();
        categories.push(axisData);
        categories2.shift();
        categories2.push(app.count++);
        myChart.setOption({
          xAxis: [
            {
              data: categories,
            },
            {
              data: categories2,
            },
          ],
          series: [
            {
              data: data,
            },
            {
              data: data2,
            },
          ],
        });
      }, 2100);

      option && myChart.setOption(option);
    }
    onMounted(() => {
      getT();
      getC();
      init();
    });
    onUnmounted(() => {
      echart.dispose;
    });

    return {
      dom,
    };
  },
};
</script>
