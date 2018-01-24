 var echarts=require('echarts');
// 基于准备好的dom，初始化echarts实例
//自定义全是在html中生成
 var option = {
     xAxis: {
         type: 'category',
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
     },
     yAxis: {
         type: 'value'
     },
     series: [{
         data: [820, 932, 901, 934, 1290, 1330, 1320],
         type: 'line'
     }]
 };


var mycharts=echarts.init(document.getElementById('main'));
mycharts.setOption(option);
