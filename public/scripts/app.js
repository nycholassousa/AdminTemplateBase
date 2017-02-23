(function () {
    'use strict';

    angular.module('app', [
        // Core modules
         'app.core'
        
        // Custom Feature modules
        ,'app.chart'
        ,'app.ui'
        ,'app.ui.form'
        ,'app.ui.form.validation'
        ,'app.page'
        ,'app.table'
        
        // 3rd party feature modules
        ,'mgo-angular-wizard'
        ,'ui.tree'
        ,'ngMap'
        ,'textAngular'
    ]);

})();


(function () {
    'use strict';

    angular.module('app.chart', ['ngecharts']);
})(); 
(function () {
    'use strict';

    angular.module('app.core', [
        // Angular modules
         'ngAnimate'
        ,'ngAria'
        ,'ngMessages'

        // Custom modules
        ,'app.layout'
        ,'app.i18n'
        
        // 3rd Party Modules
        ,'ngMaterial'
        ,'ui.router'
        ,'ui.bootstrap'
        ,'duScroll'
    ]);

})();


(function () {
    'use strict';

    angular.module('app.ui.form', []);
})(); 
(function () {
    'use strict';

    angular.module('app.ui.form.validation', ['validation.match']);
})(); 
(function () {
    'use strict';

    angular.module('app.layout', []);

})(); 
(function () {
    'use strict';

    angular.module('app.page', []);
})(); 
(function () {
    'use strict';

    angular.module('app.table', []);
})(); 
(function () {
    'use strict';

    angular.module('app.ui', ['ngMaterial']);
})(); 
(function () {
    'use strict';

    angular.module('app.chart')
        .controller('EChartsCtrl', ['$scope', '$timeout', EChartsCtrl])

    function EChartsCtrl($scope, $timeout) {
        // Build ECharts with Bar, Line, Pie, Radar, Scatter, Chord, Gauge, Funnel

        $scope.line1 = {};
        $scope.line2 = {};
        $scope.line3 = {};
        $scope.line4 = {};

        $scope.bar1 = {};
        $scope.bar2 = {};
        $scope.bar3 = {};
        $scope.bar4 = {};
        $scope.bar5 = {};

        $scope.pie1 = {};
        $scope.pie2 = {};
        $scope.pie4 = {};

        $scope.scatter1 = {};
        $scope.scatter2 = {};

        $scope.radar1 = {};
        $scope.radar2 = {};

        $scope.gauge1 = {};

        $scope.chord1 = {};

        $scope.funnel1 = {};

        $scope.line1.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Highest temperature','Lowest temperature']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'Highest temperature',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Lowest temperature',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint : {
                        data : [
                            {name : 'Lowest temperature', value : -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.line2.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Email','Affiliate','Video Ads','Direct','Search']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Email',
                    type:'line',
                    stack: 'Sum',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate',
                    type:'line',
                    stack: 'Sum',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Ads',
                    type:'line',
                    stack: 'Sum',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Direct',
                    type:'line',
                    stack: 'Sum',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Search',
                    type:'line',
                    stack: 'Sum',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        $scope.line3.options = {
            title : {
                text: 'Sales',
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Intention','Pre-order','Deal closed']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Deal closed',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name:'Pre-order',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'Intention',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };
        $scope.line4.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Email','Affiliate','Video Ads','Direct','Search']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Email',
                    type:'line',
                    stack: 'Sum',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate',
                    type:'line',
                    stack: 'Sum',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Ads',
                    type:'line',
                    stack: 'Sum',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Direct',
                    type:'line',
                    stack: 'Sum',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Search',
                    type:'line',
                    stack: 'Sum',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        $scope.bar1.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaporation','Precipitation']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaporation',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Precipitation',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : 'Highest', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : 'Lowest', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.bar2.options = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            legend: {
                data:['Direct','Email','Affiliate','Video Ads','Search','Baidu','Google','Bing','Others']
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Direct',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Email',
                    type:'bar',
                    stack: 'Ads',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate',
                    type:'bar',
                    stack: 'Ads',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Ads',
                    type:'bar',
                    stack: 'Ads',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Search',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        itemStyle:{
                            normal:{
                                lineStyle:{
                                    type: 'dashed'
                                }
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'Baidu',
                    type:'bar',
                    barWidth : 5,
                    stack: 'Search',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'Google',
                    type:'bar',
                    stack: 'Search',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'Bing',
                    type:'bar',
                    stack: 'Search',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'Others',
                    type:'bar',
                    stack: 'Search',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        $scope.bar3.options = {
            title : {
                text: 'World Population',
                subtext: 'From the Internet'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['2011', '2012']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['Brazil','Indonesia','USA','India','China','World Population (10k)']
                }
            ],
            series : [
                {
                    name:'2011',
                    type:'bar',
                    data:[18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name:'2012',
                    type:'bar',
                    data:[19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        $scope.bar4.options = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'
                }
            },
            legend: {
                data:['Direct', 'Email','Affiliate','Video Ads','Search']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            series : [
                {
                    name:'Direct',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name:'Email',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Ads',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name:'Search',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        $scope.bar5.options = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {         
                    type : 'shadow'
                }
            },
            legend: {
                data:['Profit', 'Cost', 'Income']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.']
                }
            ],
            series : [
                {
                    name:'Profit',
                    type:'bar',
                    itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                    data:[200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name:'Income',
                    type:'bar',
                    stack: 'Sum',
                    barWidth : 5,
                    itemStyle: {normal: {
                        label : {show: true}
                    }},
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'Cost',
                    type:'bar',
                    stack: 'Sum',
                    itemStyle: {normal: {
                        label : {show: true, position: 'left'}
                    }},
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };

        $scope.pie1.options = {
            title : {
                text: 'Traffic Source',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['Direct','Email','Affiliate','Video Ads','Search']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            series : [
                {
                    name:'Vist source',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'Direct'},
                        {value:310, name:'Email'},
                        {value:234, name:'Affiliate'},
                        {value:135, name:'Video Ads'},
                        {value:1548, name:'Search'}
                    ]
                }
            ]
        };
        $scope.pie2.options = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['Direct','Email','Affiliate','Video Ads','Search']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            series : [
                {
                    name:'Traffic source',
                    type:'pie',
                    radius : ['50%', '70%'],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '30',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'Direct'},
                        {value:310, name:'Email'},
                        {value:234, name:'Affiliate'},
                        {value:135, name:'Video Ads'},
                        {value:1548, name:'Search'}
                    ]
                }
            ]
        };
        $scope.pie4.options = {
            title : {
                text: 'Nightingale rose diagram',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            series : [
                {
                    name:'Radius model',
                    type:'pie',
                    radius : [20, 110],
                    center : ['25%', 200],
                    roseType : 'radius',
                    width: '40%',       // for funnel
                    max: 40,            // for funnel
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true
                            },
                            labelLine : {
                                show : true
                            }
                        }
                    },
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                },
                {
                    name:'Area model',
                    type:'pie',
                    radius : [30, 110],
                    center : ['75%', 200],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]

        };

        $scope.scatter1.options = {
            title : {
                text: 'Height and weight distribution',
                subtext: 'Data: Heinz  2003'
            },
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                formatter : function (params) {
                    if (params.value.length > 1) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + 'cm ' 
                           + params.value[1] + 'kg ';
                    }
                    else {
                        return params.seriesName + ' :<br/>'
                           + params.name + ' : '
                           + params.value + 'kg ';
                    }
                },  
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                }
            },
            legend: {
                data:['Femail','Male']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            xAxis : [
                {
                    type : 'value',
                    scale:true,
                    axisLabel : {
                        formatter: '{value} cm'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale:true,
                    axisLabel : {
                        formatter: '{value} kg'
                    }
                }
            ],
            series : [
                {
                    name:'Femail',
                    type:'scatter',
                    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                        [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                        [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                        [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                        [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                        [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                        [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                        [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                        [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                        [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                        [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                        [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                        [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                        [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                        [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                        [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                        [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                        [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                        [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                        [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                        [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                        [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                        [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                        [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                        [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                        [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                        [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                        [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                        [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                        [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                        [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                        [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                        [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                        [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                        [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                        [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                        [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                        [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                        [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                        [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                        [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                        [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                        [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                        [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                        [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                        [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                        [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                        [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                        [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                        [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                        [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                        [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Male',
                    type:'scatter',
                    data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                        [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                        [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                        [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                        [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                        [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                        [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                        [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                        [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                        [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                        [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                        [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                        [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                        [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                        [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                        [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                        [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                        [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                        [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                        [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                        [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                        [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                        [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                        [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                        [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                        [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                        [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                        [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                        [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                        [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                        [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                        [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                        [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                        [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                        [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                        [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                        [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                        [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                        [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                        [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                        [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                        [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                        [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                        [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                        [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                        [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                        [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                        [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                        [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                        [180.3, 83.2], [180.3, 83.2]
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                }
            ]
        };
        function random(){
            var r = Math.round(Math.random() * 100);
            return (r * (r % 2 == 0 ? 1 : -1));
        }
        function randomDataArray() {
            var d = [];
            var len = 100;
            while (len--) {
                d.push([
                    random(),
                    random(),
                    Math.abs(random()),
                ]);
            }
            return d;
        }        
        $scope.scatter2.options = {
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                }
            },
            legend: {
                data:['scatter1','scatter2']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            xAxis : [
                {
                    type : 'value',
                    splitNumber: 4,
                    scale: true
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitNumber: 4,
                    scale: true
                }
            ],
            series : [
                {
                    name:'scatter1',
                    type:'scatter',
                    symbolSize: function (value){
                        return Math.round(value[2] / 5);
                    },
                    data: randomDataArray()
                },
                {
                    name:'scatter2',
                    type:'scatter',
                    symbolSize: function (value){
                        return Math.round(value[2] / 5);
                    },
                    data: randomDataArray()
                }
            ]
        };

        $scope.radar1.options = {
            title : {
                text: 'Budget vs spending'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
                data:['Allocated Budget','Actual Spending']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            polar : [
               {
                   indicator : [
                       { text: 'sales', max: 6000},
                       { text: 'dministration', max: 16000},
                       { text: 'Information Techology', max: 30000},
                       { text: 'Customer Support', max: 38000},
                       { text: 'Development', max: 52000},
                       { text: 'Marketing', max: 25000}
                    ]
                }
            ],
            calculable : true,
            series : [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : 'Allocated Budget'
                        },
                         {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : 'Actual Spending'
                        }
                    ]
                }
            ]
        };
        $scope.radar2.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                x : 'center',
                data:['Ronaldo','Andriy Shevchenko']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            polar : [
                {
                    indicator : [
                        {text : 'Attack', max  : 100},
                        {text : 'Guard', max  : 100},
                        {text : 'Physical', max  : 100},
                        {text : 'Speed', max  : 100},
                        {text : 'Strength', max  : 100},
                        {text : 'Skill', max  : 100}
                    ],
                    radius : 130
                }
            ],
            series : [
                {
                    name: 'Full of live data',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    data : [
                        {
                            value : [97, 42, 88, 94, 90, 86],
                            name : 'Andriy Shevchenko'
                        },
                        {
                            value : [97, 32, 74, 95, 88, 92],
                            name : 'Ronaldo'
                        }
                    ]
                }
            ]
        };

        $scope.gauge1.options = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            series : [
                {
                    name:'Business metric',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 50, name: 'Completion'}]
                }
            ]
        };



        $scope.chord1.options = {
            title : {
                text: 'Test Data',
                subtext: 'From d3.js',
                x:'right',
                y:'bottom'
            },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    if (params.indicator2) { // is edge
                        return params.value.weight;
                    } else {// is node
                        return params.name
                    }
                }
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            legend: {
                x: 'left',
                data:['group1','group2', 'group3', 'group4']
            },
            series : [
                {
                    type:'chord',
                    sort : 'ascending',
                    sortSub : 'descending',
                    showScale : true,
                    showScaleText : true,
                    data : [
                        {name : 'group1'},
                        {name : 'group2'},
                        {name : 'group3'},
                        {name : 'group4'}
                    ],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            }
                        }
                    },
                    matrix : [
                        [11975,  5871, 8916, 2868],
                        [ 1951, 10048, 2060, 6171],
                        [ 8010, 16145, 8090, 8045],
                        [ 1013,   990,  940, 6907]
                    ]
                }
            ]
        };

        $scope.funnel1.options = {
            title : {
                text: 'Funnel'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"},
                    saveAsImage : {show: true, title: "save as image"}
                }
            },
            legend: {
                data : ['Display','Click','Vist','Contact','Order']
            },
            calculable : true,
            series : [
                {
                    name:'Funnel',
                    type:'funnel',
                    width: '40%',
                    data:[
                        {value:60, name:'Vist'},
                        {value:40, name:'Contact'},
                        {value:20, name:'Order'},
                        {value:80, name:'Click'},
                        {value:100, name:'Display'}
                    ]
                },
                {
                    name:'Pyramid',
                    type:'funnel',
                    x : '50%',
                    sort : 'ascending',
                    itemStyle: {
                        normal: {
                            label: {
                                position: 'left'
                            }
                        }
                    },
                    data:[
                        {value:60, name:'Vist'},
                        {value:40, name:'Contact'},
                        {value:20, name:'Order'},
                        {value:80, name:'Click'},
                        {value:100, name:'Display'}
                    ]
                }
            ]
        };
    }    
})(); 

(function() {
    'use strict';

    angular.module('app.core')
        .factory('appConfig', [appConfig])
        .config(['$mdThemingProvider', mdConfig]);

    function appConfig() {
        var pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];
        var date = new Date();
        var year = date.getFullYear();
        var main = {
            brand: 'Material',
            name: 'Lisa',
            year: year,
            layout: 'wide',                                 // String: 'boxed', 'wide'
            menu: 'vertical',                               // String: 'horizontal', 'vertical'
            isMenuCollapsed: false,                         // Boolean: true, false
            fixedHeader: true,                              // Boolean: true, false
            fixedSidebar: true,                             // Boolean: true, false
            pageTransition: pageTransitionOpts[0],          // Object: 0, 1, 2, 3 and build your own
            skin: '12'                                      // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        };
        var color = {
            primary:    '#009688',
            success:    '#8BC34A',
            info:       '#00BCD4',
            infoAlt:    '#7E57C2',
            warning:    '#FFCA28',
            danger:     '#F44336',
            text:       '#3D4051',
            gray:       '#EDF0F1'
        };

        return {
            pageTransitionOpts: pageTransitionOpts,
            main: main,
            color: color
        }
    }

    function mdConfig($mdThemingProvider) {
        var cyanAlt = $mdThemingProvider.extendPalette('cyan', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })
        var lightGreenAlt = $mdThemingProvider.extendPalette('light-green', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })        

        $mdThemingProvider
            .definePalette('cyanAlt', cyanAlt)
            .definePalette('lightGreenAlt', lightGreenAlt);


        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '500'
            })
            .accentPalette('cyanAlt', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            })
            .backgroundPalette('grey');
    }

})();
(function () {
    'use strict';

    angular.module('app')
    .controller('AppCtrl', [ '$scope', '$rootScope', '$state', '$document', 'appConfig', AppCtrl]) // overall control
    
    function AppCtrl($scope, $rootScope, $state, $document, appConfig) {

        $scope.pageTransitionOpts = appConfig.pageTransitionOpts;
        $scope.main = appConfig.main;
        $scope.color = appConfig.color;

        $scope.$watch('main', function(newVal, oldVal) {
            // if (newVal.menu !== oldVal.menu || newVal.layout !== oldVal.layout) {
            //     $rootScope.$broadcast('layout:changed');
            // }

            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.main.fixedHeader = true;
                    $scope.main.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.main.fixedHeader = false;
                    $scope.main.fixedSidebar = false;
                }
            }
            if (newVal.fixedSidebar === true) {
                $scope.main.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.main.fixedSidebar = false;
            }
        }, true);


        $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });
    }

})(); 
(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            var routes, setRoutes;

            routes = [
                'ui/cards', 'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/timeline', 'ui/lists', 'ui/pricing-tables',
                'map/maps',
                'table/static', 'table/dynamic', 'table/responsive',
                'form/elements', 'form/layouts', 'form/validation', 'form/wizard',
                'chart/echarts', 'chart/echarts-line', 'chart/echarts-bar', 'chart/echarts-pie', 'chart/echarts-scatter', 'chart/echarts-more',
                'page/404', 'page/500', 'page/blank', 'page/forgot-password', 'page/invoice', 'page/lock-screen', 'page/profile', 'page/signin', 'page/signup',
                'app/calendar'
            ]

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    url: url,
                    templateUrl: 'app/' + route + '.html'
                };
                $stateProvider.state(route, config);
                return $stateProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $urlRouterProvider
                .when('/', '/dashboard')
                .otherwise('/dashboard');


            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.html'
            });

        }]
    );

})(); 
(function () {

    angular.module('app.i18n', ['pascalprecht.translate'])
        .config(['$translateProvider', i18nConfig])
        .controller('LangCtrl', ['$scope', '$translate', LangCtrl]);

    // English, Español, 日本語, 中文, Deutsch, français, Italiano, Portugal, Русский язык, 한국어
    // Note: Used on Header, Sidebar, Footer, Dashboard
    // English:            EN-US
    // Spanish:            Español ES-ES
    // Chinese:            简体中文 ZH-CN
    // Chinese:            繁体中文 ZH-TW
    // French:             français FR-FR

    // Not used:
    // Portugal:         Portugal PT-BR
    // Russian:            Русский язык RU-RU
    // German:             Deutsch DE-DE
    // Japanese:         日本語 JA-JP
    // Italian:            Italiano IT-IT
    // Korean:             한국어 KO-KR


    function i18nConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }

    function LangCtrl($scope, $translate) {
        $scope.lang = 'English';
        $scope.setLang = setLang;
        $scope.getFlag = getFlag;


        function setLang (lang) {
            switch (lang) {
                case 'English':
                    $translate.use('en');
                    break;
                case 'Español':
                    $translate.use('es');
                    break;
                case '中文':
                    $translate.use('zh');
                    break;
                case '日本語':
                    $translate.use('ja');
                    break;
                case 'Portugal':
                    $translate.use('pt');
                    break;
                case 'Русский язык':
                    $translate.use('ru');
                    break;
            }
            return $scope.lang = lang;
        };

        function getFlag() {
            var lang;
            lang = $scope.lang;
            switch (lang) {
                case 'English':
                    return 'flags-american';
                    break;
                case 'Español':
                    return 'flags-spain';
                    break;
                case '中文':
                    return 'flags-china';
                    break;
                case 'Portugal':
                    return 'flags-portugal';
                    break;
                case '日本語':
                    return 'flags-japan';
                    break;
                case 'Русский язык':
                    return 'flags-russia';
                    break;
            }
        };

    }

})(); 

(function () {
    'use strict';

    angular.module('app')
        .controller('DashboardCtrl', ['$scope', DashboardCtrl])

    function DashboardCtrl($scope) {
        // success: #8BC34A 139,195,74
        // info: #00BCD4 0,188,212
        // gray: #EDF0F1 237,240,241

        // Traffic chart
        $scope.combo = {};
        $scope.combo.options = {
            legend: {
                show: true,
                x: 'right',
                y: 'top',
                data: ['WOM', 'Viral', 'Paid']
            },            
            grid: {
                x: 40,
                y: 60,
                x2: 40,
                y2: 30,
                borderWidth: 0
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: $scope.color.gray
                    }
                }
            },            
            xAxis: [
                {
                    type : 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#607685'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#f3f3f3'
                        }
                    },
                    data : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#607685'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f3f3f3'
                        }
                    }
                }
            ],
            series: [
                {
                    name:'WOM',
                    type:'bar',
                    clickable: false,
                    itemStyle: {
                        normal: {
                            color: $scope.color.gray
                        },
                        emphasis: {
                            color: 'rgba(237,240,241,.7)'
                        }
                    },
                    barCategoryGap: '50%',
                    data:[75,62,45,60,73,50,31,56,70,63,49,72,76,67,46,51,69,59,85,67,56],
                    legendHoverLink: false,
                    z: 2
                },
                {
                    name:'Viral',
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            color: $scope.color.success,
                            areaStyle: {
                                color: 'rgba(139,195,74,.7)',
                                type: 'default'
                            }
                        }
                    },
                    data:[0,0,0,5,20,15,30,28,25,40,60,40,43,32,36,23,12,15,2,0,0],
                    symbol: 'none',
                    legendHoverLink: false,
                    z: 3
                },
                {
                    name:'Paid',
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            color: $scope.color.info,
                            areaStyle: {
                                color: 'rgba(0,188,212,.7)',
                                type: 'default'
                            }
                        }
                    },
                    data:[0,0,0,0,1,6,15,8,16,9,25,12,50,20,25,12,2,1,0,0,0],
                    symbol: 'none',
                    legendHoverLink: false,
                    z: 4
                }
            ]            
        };


        // 
        $scope.smline1 = {};
        $scope.smline2 = {};
        $scope.smline3 = {};
        $scope.smline4 = {};
        $scope.smline1.options = {
            tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: $scope.color.gray
                    }
                }
            }, 
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },            
            xAxis : [
                {
                    type : 'category',
                    show: false,
                    boundaryGap : false,
                    data : [1,2,3,4,5,6,7]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show: false,
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'*',
                    type:'line',
                    symbol: 'none',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    itemStyle: {
                        normal: {
                            color: $scope.color.info
                        }
                    }                    
                }
            ]
        };
        $scope.smline2.options = {
            tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: $scope.color.gray
                    }
                }
            }, 
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },            
            xAxis : [
                {
                    type : 'category',
                    show: false,
                    boundaryGap : false,
                    data : [1,2,3,4,5,6,7]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show: false,
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'*',
                    type:'line',
                    symbol: 'none',
                    data:[11, 10, 14, 12, 13, 11, 12],
                    itemStyle: {
                        normal: {
                            color: $scope.color.success
                        }
                    }                     
                }
            ]
        };
        $scope.smline3.options = {
            tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: $scope.color.gray
                    }
                }
            }, 
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },            
            xAxis : [
                {
                    type : 'category',
                    show: false,
                    boundaryGap : false,
                    data : [1,2,3,4,5,6,7]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show: false,
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'*',
                    type:'line',
                    symbol: 'none',
                    data:[11, 10, 15, 13, 12, 13, 10],
                    itemStyle: {
                        normal: {
                            color: $scope.color.danger
                        }
                    }                 
                }
            ]
        };
        $scope.smline4.options = {
            tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: $scope.color.gray
                    }
                }
            }, 
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },            
            xAxis : [
                {
                    type : 'category',
                    show: false,
                    boundaryGap : false,
                    data : [1,2,3,4,5,6,7]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show: false,
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'*',
                    type:'line',
                    symbol: 'none',
                    data:[11, 12, 8, 10, 15, 12, 10],
                    itemStyle: {
                        normal: {
                            color: $scope.color.warning
                        }
                    }                      
                }
            ]
        };



        // Engagment pie charts
        var labelTop = {
            normal : {
                color: $scope.color.primary,
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        color: '#999',
                        baseline : 'top',
                        fontSize: 12
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        color: $scope.color.text,
                        baseline : 'bottom',
                        fontSize: 20
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#f1f1f1',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            }
        };        
        var radius = [55, 60];
        $scope.pie = {};
        $scope.pie.options = {
            series : [
                {
                    type : 'pie',
                    center : ['12.5%', '50%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'Bounce', value:36, itemStyle : labelTop},
                        {name:'other', value:64, itemStyle : labelBottom}
                    ]
                },{
                    type : 'pie',
                    center : ['37.5%', '50%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'Activation', value:45, itemStyle : labelTop},
                        {name:'other', value:55, itemStyle : labelBottom}
                    ]
                },{
                    type : 'pie',
                    center : ['62.5%', '50%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'Retention', value:25, itemStyle : labelTop},
                        {name:'other', value:75, itemStyle : labelBottom}
                    ]
                },{
                    type : 'pie',
                    center : ['87.5%', '50%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'Referral', value:75, itemStyle : labelTop},
                        {name:'other', value:25, itemStyle : labelBottom}
                    ]
                }
            ]
        };        
    }


})(); 

(function () {
    'use strict';

    angular.module('app.ui.form')
        .controller('InputCtrl', ['$scope', InputCtrl])
        .controller('CheckboxCtrl', ['$scope', CheckboxCtrl])
        .controller('RadioCtrl', ['$scope', RadioCtrl])
        .controller('FormCtrl', ['$scope', FormCtrl])
        .controller('MaterialAutocompleteCtrl', ['$scope', '$timeout', '$q', '$log', MaterialAutocompleteCtrl])
        .controller('MaterialDatepickerCtrl', ['$scope', MaterialDatepickerCtrl])
        .controller('DatepickerDemoCtrl', ['$scope', DatepickerDemoCtrl])
        .controller('TimepickerDemoCtrl', ['$scope', TimepickerDemoCtrl])
        .controller('TypeaheadCtrl', ['$scope', TypeaheadCtrl])
        .controller('RatingDemoCtrl', ['$scope', RatingDemoCtrl]);

    function InputCtrl ($scope) {
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
                return {abbrev: state};
            })
    }
    function CheckboxCtrl ($scope) {
        $scope.checkbox = {};
        $scope.checkbox.cb1 = true;
        $scope.checkbox.cb2 = false;
        $scope.checkbox.cb3 = false;
        $scope.checkbox.cb4 = false;
        $scope.checkbox.cb5 = false;        
        $scope.checkbox.cb6 = true;        
        $scope.checkbox.cb7 = true;        
        $scope.checkbox.cb8 = true;    
        $scope.items = [1,2,3,4,5];
        $scope.selected = [];
        $scope.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };
        $scope.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };        
    }
    function RadioCtrl ($scope) {
        $scope.radio = {
            group1 : 'Banana',
            group2 : '2',
            group3 : 'Primary'
        };
        $scope.radioData = [
            { label: 'Radio: disabled', value: '1', isDisabled: true },
            { label: 'Radio: disabled, Checked', value: '2', isDisabled: true }
        ];
        $scope.contacts = [{
            'id': 1,
            'fullName': 'Maria Guadalupe',
            'lastName': 'Guadalupe',
            'title': "CEO, Found"
        }, {
            'id': 2,
            'fullName': 'Gabriel García Marquéz',
            'lastName': 'Marquéz',
            'title': "VP Sales & Marketing"
        }, {
            'id': 3,
            'fullName': 'Miguel de Cervantes',
            'lastName': 'Cervantes',
            'title': "Manager, Operations"
        }, {
            'id': 4,
            'fullName': 'Pacorro de Castel',
            'lastName': 'Castel',
            'title': "Security"
        }];
        $scope.selectedIndex = 2;
        $scope.selectedUser = function() {
            var index = $scope.selectedIndex - 1;
            return $scope.contacts[index].lastName;
        }            

    }



    function FormCtrl($scope) {
        // Slider
        $scope.color = {
            red: 97,
            green: 211,
            blue: 140
        };
        $scope.rating1 = 3;
        $scope.rating2 = 2;
        $scope.rating3 = 4;
        $scope.disabled1 = 0;
        $scope.disabled2 = 70;

        // Input
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '' ,
            company: 'Google' ,
            address: '1600 Amphitheatre Pkwy' ,
            city: 'Mountain View' ,
            state: 'CA' ,
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode : '94043'
        };


        // Select
        $scope.select1 = '1';
        $scope.toppings = [
            { category: 'meat', name: 'Pepperoni' },
            { category: 'meat', name: 'Sausage' },
            { category: 'meat', name: 'Ground Beef' },
            { category: 'meat', name: 'Bacon' },
            { category: 'veg', name: 'Mushrooms' },
            { category: 'veg', name: 'Onion' },
            { category: 'veg', name: 'Green Pepper' },
            { category: 'veg', name: 'Green Olives' }
        ];
        $scope.favoriteTopping = $scope.toppings[0].name

        // Switch
        $scope.switchData = {
            cb1: true,
            cbs: false,
            cb4: true,
            color1: true,
            color2: true,
            color3: true
        };
        $scope.switchOnChange = function(cbState){
            $scope.message = "The switch is now: " + cbState;
        };
    }

    function MaterialAutocompleteCtrl ($scope, $timeout, $q, $log) {

        var $scope = this;
        $scope.simulateQuery = false;
        $scope.isDisabled    = false;
        // list of `state` value/display objects
        $scope.states        = loadAll();
        $scope.querySearch   = querySearch;
        $scope.selectedItemChange = selectedItemChange;
        $scope.searchTextChange   = searchTextChange;
        $scope.newState = newState;
        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
                    deferred;
            if ($scope.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function searchTextChange(text) {
            // $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            // $log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                            Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                            Wisconsin, Wyoming';
            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }

    function MaterialDatepickerCtrl ($scope) {
        $scope.myDate = new Date();
        $scope.minDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() - 2,
              $scope.myDate.getDate());
        $scope.maxDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() + 2,
              $scope.myDate.getDate());        
    }
    function DatepickerDemoCtrl ($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };

        $scope.toggleMin();
        $scope.maxDate = new Date(2020, 5, 22);

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events =
            [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
    }

    function TimepickerDemoCtrl($scope) {
        $scope.mytime = new Date();

        $scope.hstep = 1;

        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;

        $scope.toggleMode = function() {
            return $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function() {
            var d;
            d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            return $scope.mytime = d;
        };

        $scope.changed = function() {
            // return console.log('Time changed to: ' + $scope.mytime);
        };

        $scope.clear = function() {
            return $scope.mytime = null;
        };

    }


    function TypeaheadCtrl($scope) {
        $scope.selected = undefined;
        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }

    function RatingDemoCtrl($scope) {
        $scope.rate = 7;

        $scope.max = 10;

        $scope.isReadonly = false;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            return $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {
                stateOn: 'glyphicon-ok-sign',
                stateOff: 'glyphicon-ok-circle'
            }, {
                stateOn: 'glyphicon-star',
                stateOff: 'glyphicon-star-empty'
            }, {
                stateOn: 'glyphicon-heart',
                stateOff: 'glyphicon-ban-circle'
            }, {
                stateOn: 'glyphicon-heart'
            }, {
                stateOff: 'glyphicon-off'
            }
        ];

    }

})(); 
(function () {
    'use strict';

    angular.module('app.ui.form')
        .directive('uiRangeSlider', uiRangeSlider)
        .directive('uiSpinner', uiSpinner)
        .directive('uiWizardForm', uiWizardForm);

    // Dependency: http://www.eyecon.ro/bootstrap-slider/ OR https://github.com/seiyria/bootstrap-slider
    function uiRangeSlider() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
            ele.slider();
            }            
        }
    }

    // Dependency: https://github.com/xixilive/jquery-spinner
    function uiSpinner() {
        return {
            restrict: 'A',
            compile: function(ele, attrs) { // link and compile do not work together
            ele.addClass('ui-spinner');
            return {
                post: function() {
                ele.spinner();
                }
            };
            }
            // link: // link and compile do not work together
        }
    }


    // Dependency: https://github.com/rstaib/jquery-steps
    function uiWizardForm() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
            ele.steps()
            }            
        }
    }

})(); 



(function () {
    'use strict';

    angular.module('app.ui.form.validation')
        .controller('FormConstraintsCtrl', ['$scope', FormConstraintsCtrl])
        .controller('MaterialLoginCtrl', ['$scope', MaterialLoginCtrl])
        .controller('MaterialSignUpCtrl', ['$scope', MaterialSignUpCtrl])
        .controller('SigninCtrl', ['$scope', SigninCtrl])
        .controller('SignupCtrl', ['$scope', SignupCtrl]);

    function FormConstraintsCtrl($scope) {
        var original;

        $scope.form = {
            required: '',
            minlength: '',
            maxlength: '',
            length_rage: '',
            type_something: '',
            confirm_type: '',
            foo: '',
            email: '',
            url: '',
            num: '',
            minVal: '',
            maxVal: '',
            valRange: '',
            pattern: ''
        };

        original = angular.copy($scope.form);
        $scope.revert = function() {
            $scope.form = angular.copy(original);
            return $scope.form_constraints.$setPristine();
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };           
    }

    function MaterialLoginCtrl ($scope) {
        var original;

        $scope.user = {
            email: '',
            passowrd: ''
        }   

        original = angular.copy($scope.user);
        // https://github.com/angular/material/issues/1903
        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.material_login_form.$setPristine();
            $scope.material_login_form.$setUntouched();
            return;
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.material_login_form.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.material_login_form.$valid && !angular.equals($scope.user, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };                 
    }

    function MaterialSignUpCtrl ($scope) {
        var original;

        $scope.user = {
            name: '',
            email: '',
            passowrd: ''
        }   

        original = angular.copy($scope.user);
        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.material_signup_form.$setPristine();
            $scope.material_signup_form.$setUntouched();
            return;
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.material_signup_form.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.material_signup_form.$valid && !angular.equals($scope.user, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };           
    }

    function SigninCtrl($scope) {
        var original;

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.showInfoOnSubmit = false;

        original = angular.copy($scope.user);

        $scope.revert = function() {
            $scope.user = angular.copy(original);
            return $scope.form_signin.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_signin.$valid && !angular.equals($scope.user, original);
        };

        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };
    }

    function SignupCtrl($scope) {
        var original;

        $scope.user = {
            name: '',
            email: '',
            password: '',
            age: ''
        };

        $scope.showInfoOnSubmit = false;

        original = angular.copy($scope.user);

        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.form_signup.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original);
        };

        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };

    }

})(); 
(function () {
    'use strict';

    angular.module('app.ui.form')
        .controller('WizardCtrl', ['$scope', '$q', '$timeout', 'WizardHandler', WizardCtrl]);

    function WizardCtrl ($scope, $q, $timeout, WizardHandler) {
        $scope.canExit = false;
        $scope.stepActive = true;

        $scope.finished = function() {
            alert("Wizard finished :)");
        };
        $scope.logStep = function() {
            console.log("Step continued");
        };
        $scope.goBack = function() {
            WizardHandler.wizard().goTo(0);
        };
        $scope.exitWithAPromise = function() {
            var d = $q.defer();
            $timeout(function() {
                d.resolve(true);
            }, 1000);
            return d.promise;
        };
        $scope.exitToggle = function() {
            $scope.canExit = !$scope.canExit;
        };
        $scope.stepToggle = function() {
            $scope.stepActive = !$scope.stepActive;
        }
        $scope.exitValidation = function() {
            return $scope.canExit;
        };
    }
})(); 


(function () {
    'use strict';

    angular.module('app.layout')
        .directive('uiPreloader', ['$rootScope', uiPreloader]);

    function uiPreloader($rootScope) {
        return {
            restrict: 'A',
            template:'<span class="bar"></span>',
            link: function(scope, el, attrs) {        
                el.addClass('preloaderbar hide');
                scope.$on('$stateChangeStart', function(event) {
                    el.removeClass('hide').addClass('active');
                });
                scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
                    event.targetScope.$watch('$viewContentLoaded', function(){
                        el.addClass('hide').removeClass('active');
                    })
                });

                scope.$on('preloader:active', function(event) {
                    el.removeClass('hide').addClass('active');
                });
                scope.$on('preloader:hide', function(event) {
                    el.addClass('hide').removeClass('active');
                });                
            }
        };        
    }
})(); 


(function () {
    $(window).load(function(){
        setTimeout( hideLoader , 1000)
    });

    function hideLoader() {
        $('#loader-container').fadeOut("slow")
    }    
})(); 

(function () {
    'use strict';

    angular.module('app.layout')
        .directive('toggleNavCollapsedMin', ['$rootScope', toggleNavCollapsedMin])
        .directive('collapseNav', collapseNav)
        .directive('highlightActive', highlightActive)
        .directive('toggleOffCanvas', toggleOffCanvas);

    // switch for mini style NAV, realted to 'collapseNav' directive
    function toggleNavCollapsedMin($rootScope) {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var app;

            app = $('#app');

            ele.on('click', function(e) {
                if (app.hasClass('nav-collapsed-min')) {
                    app.removeClass('nav-collapsed-min');
                } else {
                    app.addClass('nav-collapsed-min');
                    $rootScope.$broadcast('nav:reset');
                }
                return e.preventDefault();
            });            
        }
    }

    // for accordion/collapse style NAV
    function collapseNav() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, slideTime, updateClass;

            slideTime = 250;

            $window = $(window);

            $lists = ele.find('ul').parent('li');

            $lists.append('<i class="fa fa-angle-down icon-has-ul-h"></i>');

            $a = $lists.children('a');
            $a.append('<i class="fa fa-angle-down icon-has-ul"></i>');

            $listsRest = ele.children('li').not($lists);

            $aRest = $listsRest.children('a');

            $app = $('#app');

            $nav = $('#nav-container');

            $a.on('click', function(event) {
                var $parent, $this;
                if ($app.hasClass('nav-collapsed-min') || ($nav.hasClass('nav-horizontal') && $window.width() >= 768)) {
                    return false;
                }
                $this = $(this);
                $parent = $this.parent('li');
                $lists.not($parent).removeClass('open').find('ul').slideUp(slideTime);
                $parent.toggleClass('open').find('ul').stop().slideToggle(slideTime);
                event.preventDefault();
            });

            $aRest.on('click', function(event) {
                $lists.removeClass('open').find('ul').slideUp(slideTime);
            });

            scope.$on('nav:reset', function(event) {
                $lists.removeClass('open').find('ul').slideUp(slideTime);
            });

            Timer = void 0;

            prevWidth = $window.width();

            updateClass = function() {
                var currentWidth;
                currentWidth = $window.width();
                if (currentWidth < 768) {
                    $app.removeClass('nav-collapsed-min');
                }
                if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass('nav-horizontal')) {
                    $lists.removeClass('open').find('ul').slideUp(slideTime);
                }
                prevWidth = currentWidth;
            };

            $window.resize(function() {
                var t;
                clearTimeout(t);
                t = setTimeout(updateClass, 300);
            });
          
        }
    }

    // Add 'active' class to li based on url, muli-level supported, jquery free
    function highlightActive() {
        var directive = {
            restrict: 'A',
            controller: [ '$scope', '$element', '$attrs', '$location', highlightActiveCtrl]
        };

        return directive;

        function highlightActiveCtrl($scope, $element, $attrs, $location) {
            var highlightActive, links, path;

            links = $element.find('a');

            path = function() {
                return $location.path();
            };

            highlightActive = function(links, path) {
                path = '#' + path;
                return angular.forEach(links, function(link) {
                    var $li, $link, href;
                    $link = angular.element(link);
                    $li = $link.parent('li');
                    href = $link.attr('href');
                    if ($li.hasClass('active')) {
                        $li.removeClass('active');
                    }
                    if (path.indexOf(href) === 0) {
                        return $li.addClass('active');
                    }
                });
            };

            highlightActive(links, $location.path());

            $scope.$watch(path, function(newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return highlightActive(links, $location.path());
            });

        }

    }

    // toggle on-canvas for small screen, with CSS
    function toggleOffCanvas() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            ele.on('click', function() {
                return $('#app').toggleClass('on-canvas');
            });         
        }
    }


})(); 




(function () {
    'use strict';

    angular.module('app.page')
    .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
    .controller('authCtrl', ['$scope', '$window', '$location', authCtrl]);

    function invoiceCtrl($scope, $window) {
        var printContents, originalContents, popupWin;
        
        $scope.printInvoice = function() {
            printContents = document.getElementById('invoice').innerHTML;
            originalContents = document.body.innerHTML;        
            popupWin = window.open();
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
    }

    function authCtrl($scope, $window, $location) {
        $scope.login = function() {
            $location.url('/')
        }

        $scope.signup = function() {
            $location.url('/')
        }

        $scope.reset =    function() {
            $location.url('/')
        }

        $scope.unlock =    function() {
            $location.url('/')
        }     
    }

})(); 




(function () {
    'use strict';

    angular.module('app.page')
        .directive('customPage', customPage);


    // add class for specific pages to achieve fullscreen, custom background etc.
    function customPage() {
        var directive = {
            restrict: 'A',
            controller: ['$scope', '$element', '$location', customPageCtrl]
        };

        return directive;

        function customPageCtrl($scope, $element, $location) {
            var addBg, path;

            path = function() {
                return $location.path();
            };

            addBg = function(path) {
                $element.removeClass('on-canvas');
                $element.removeClass('body-wide body-err body-lock body-auth');
                switch (path) {
                    case '/404':
                    case '/page/404':
                    case '/page/500':
                        return $element.addClass('body-wide body-err');
                    case '/page/signin':
                    case '/page/signup':
                    case '/page/forgot-password':
                        return $element.addClass('body-wide body-auth');
                    case '/page/lock-screen':
                        return $element.addClass('body-wide body-lock');
                }
            };

            addBg($location.path());

            $scope.$watch(path, function(newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return addBg($location.path());
            });
        }        
    }
 
})(); 



(function () {
    'use strict';

    angular.module('app.table')
        .controller('TableCtrl', ['$scope', '$filter', TableCtrl]);

    function TableCtrl($scope, $filter) {
        var init;

        $scope.stores = [];
        $scope.searchKeywords = '';
        $scope.filteredStores = [];
        $scope.row = '';
        $scope.select = select;
        $scope.onFilterChange = onFilterChange;
        $scope.onNumPerPageChange = onNumPerPageChange;
        $scope.onOrderChange = onOrderChange;
        $scope.search = search;
        $scope.order = order;
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPage = [];

        ////
        $scope.stores = [
            {
            name: 'Nijiya Market',
            price: '$$',
            sales: 292,
            rating: 4.0
            }, {
            name: 'Eat On Monday Truck',
            price: '$',
            sales: 119,
            rating: 4.3
            }, {
            name: 'Tea Era',
            price: '$',
            sales: 874,
            rating: 4.0
            }, {
            name: 'Rogers Deli',
            price: '$',
            sales: 347,
            rating: 4.2
            }, {
            name: 'MoBowl',
            price: '$$$',
            sales: 24,
            rating: 4.6
            }, {
            name: 'The Milk Pail Market',
            price: '$',
            sales: 543,
            rating: 4.5
            }, {
            name: 'Nob Hill Foods',
            price: '$$',
            sales: 874,
            rating: 4.0
            }, {
            name: 'Scratch',
            price: '$$$',
            sales: 643,
            rating: 3.6
            }, {
            name: 'Gochi Japanese Fusion Tapas',
            price: '$$$',
            sales: 56,
            rating: 4.1
            }, {
            name: 'Cost Plus World Market',
            price: '$$',
            sales: 79,
            rating: 4.0
            }, {
            name: 'Bumble Bee Health Foods',
            price: '$$',
            sales: 43,
            rating: 4.3
            }, {
            name: 'Costco',
            price: '$$',
            sales: 219,
            rating: 3.6
            }, {
            name: 'Red Rock Coffee Co',
            price: '$',
            sales: 765,
            rating: 4.1
            }, {
            name: '99 Ranch Market',
            price: '$',
            sales: 181,
            rating: 3.4
            }, {
            name: 'Mi Pueblo Food Center',
            price: '$',
            sales: 78,
            rating: 4.0
            }, {
            name: 'Cucina Venti',
            price: '$$',
            sales: 163,
            rating: 3.3
            }, {
            name: 'Sufi Coffee Shop',
            price: '$',
            sales: 113,
            rating: 3.3
            }, {
            name: 'Dana Street Roasting',
            price: '$',
            sales: 316,
            rating: 4.1
            }, {
            name: 'Pearl Cafe',
            price: '$',
            sales: 173,
            rating: 3.4
            }, {
            name: 'Posh Bagel',
            price: '$',
            sales: 140,
            rating: 4.0
            }, {
            name: 'Artisan Wine Depot',
            price: '$$',
            sales: 26,
            rating: 4.1
            }, {
            name: 'Hong Kong Chinese Bakery',
            price: '$',
            sales: 182,
            rating: 3.4
            }, {
            name: 'Starbucks',
            price: '$$',
            sales: 97,
            rating: 3.7
            }, {
            name: 'Tapioca Express',
            price: '$',
            sales: 301,
            rating: 3.0
            }, {
            name: 'House of Bagels',
            price: '$',
            sales: 82,
            rating: 4.4
            }
        ];

        function select(page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        };

        function onFilterChange() {
            $scope.select(1);
            $scope.currentPage = 1;
            return $scope.row = '';
        };

        function onNumPerPageChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function onOrderChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function search() {
            $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
            return $scope.onFilterChange();
        };

        function order(rowName) {
            if ($scope.row === rowName) {
            return;
            }
            $scope.row = rowName;
            $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
            return $scope.onOrderChange();
        };

        init = function() {
            $scope.search();
            return $scope.select($scope.currentPage);
        };

        init();
    }

})(); 
(function () {
    'use strict';
    
    angular
        .module('app.ui')
        .controller('ChipsBasicDemoCtrl', ChipsBasicDemoCtrl)
        .controller('DialogDemo', ['$scope', '$mdDialog', DialogDemo])
        .controller('TabsDemo', ['$scope', '$log', TabsDemo])
        .controller('ProgressCircularDemo', ['$scope', '$interval', ProgressCircularDemo])
        .controller('ProgressLinearDemo', ['$scope', '$interval', ProgressLinearDemo])
        .controller('ToastDemo', ['$scope', '$mdToast', '$document', ToastDemo])
        .controller('ToastCustomDemo', ['$scope', '$mdToast', ToastCustomDemo])
        .controller('TooltipDemo', ['$scope', TooltipDemo])
        .controller('SubheaderDemo', ['$scope', SubheaderDemo])
        .controller('SelectDemo', SelectDemo);

    function ChipsBasicDemoCtrl () {
        var self = this;
        self.readonly = false;
        // Lists of fruit names and Vegetable objects
        self.fruitNames = ['Apple', 'Banana', 'Orange'];
        self.roFruitNames = angular.copy(self.fruitNames);
        self.tags = [];
        self.vegObjs = [
            {
                'name' : 'Broccoli',
                'type' : 'Brassica'
            },
            {
                'name' : 'Cabbage',
                'type' : 'Brassica'
            },
            {
                'name' : 'Carrot',
                'type' : 'Umbelliferous'
            }
        ];
        self.newVeg = function(chip) {
            return {
                name: chip,
                type: 'unknown'
            };
        };
    }

    function DialogDemo($scope, $mdDialog) {
        $scope.status = '  ';
        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                        .title('Would you like to delete your debt?')
                        .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
                        .ariaLabel('Lucky day')
                        .targetEvent(ev)
                        .ok('Please do it!')
                        .cancel('Sounds like a scam');
            $mdDialog.show(confirm).then(function() {
                $scope.status = 'You decided to get rid of your debt.';
            }, function() {
                $scope.status = 'You decided to keep your debt.';
            });
        };
        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };


        // Open From Close To
        $scope.openOffscreen = function() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Opening from offscreen')
                    .content('Closing to offscreen')
                    .ariaLabel('Offscreen Demo')
                    .ok('Amazing!')
                    // Or you can specify the rect to do the transition from
                    .openFrom({
                        top: 50,
                        width: 30,
                        height: 80
                    })
                    .closeTo({
                        left: 1500
                    })
            );
        };        
    }
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    function TabsDemo($scope, $log) {
        var tabs = [
            { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
            { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
            { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
            { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
            { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
            { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
            { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
            { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
            { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
            { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
        $scope.$watch('selectedIndex', function(current, old){
            previous = selected;
            selected = tabs[current];
            // if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            // if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({ title: title, content: view, disabled: false});
        };
        $scope.removeTab = function (tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
    }

    function ProgressCircularDemo($scope, $interval) {
        var self = this,  j= 0, counter = 0;
        self.modes = [ ];
        self.activated = true;
        self.determinateValue = 30;
        /**
         * Turn off or on the 5 themed loaders
         */
        self.toggleActivation = function() {
                if ( !self.activated ) self.modes = [ ];
                if (  self.activated ) j = counter = 0;
        };
        // Iterate every 100ms, non-stop
        $interval(function() {
            // Increment the Determinate loader
            self.determinateValue += 1;
            if (self.determinateValue > 100) {
                self.determinateValue = 30;
            }
            // Incrementally start animation the five (5) Indeterminate,
            // themed progress circular bars
            if ( (j < 5) && !self.modes[j] && self.activated ) {
                self.modes[j] = 'indeterminate';
            }
            if ( counter++ % 4 == 0 ) j++;
        }, 100, 0, true);        
    }

    function ProgressLinearDemo($scope, $interval) {
        var self = this, j= 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
        self.modes = [ ];

        self.toggleActivation = function() {
            if ( !self.activated ) self.modes = [ ];
            if (  self.activated ) {
                j = counter = 0;
                self.determinateValue = 30;
                self.determinateValue2 = 30;
            }
        };
        $interval(function() {
            self.determinateValue += 1;
            self.determinateValue2 += 1.5;
            if (self.determinateValue > 100) self.determinateValue = 30;
            if (self.determinateValue2 > 100) self.determinateValue2 = 30;
                // Incrementally start animation the five (5) Indeterminate,
                // themed progress circular bars
                if ( (j < 2) && !self.modes[j] && self.activated ) {
                    self.modes[j] = (j==0) ? 'buffer' : 'query';
                }
                if ( counter++ % 4 == 0 ) j++;
                // Show the indicator in the "Used within Containers" after 200ms delay
                if ( j == 2 ) self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function() {
            self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    }

    function ToastDemo($scope, $mdToast, $document) {
        var last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };

        $scope.toastPosition = angular.extend({},last);

        $scope.getToastPosition = function() {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        function sanitizePosition() {
            var current = $scope.toastPosition;

            if ( current.bottom && last.top ) current.top = false;
            if ( current.top && last.bottom ) current.bottom = false;
            if ( current.right && last.left ) current.left = false;
            if ( current.left && last.right ) current.right = false;

            last = angular.extend({},current);
        }

        $scope.showCustomToast = function() {
            $mdToast.show({
                controller: 'ToastCustomDemo',
                templateUrl: 'toast-template.html',
                parent : $document[0].querySelector('#toastBounds'),
                hideDelay: 6000,
                position: $scope.getToastPosition()
            });
        };

        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };

        $scope.showActionToast = function() {
            var toast = $mdToast.simple()
                        .content('Action Toast!')
                        .action('OK')
                        .highlightAction(false)
                        .position($scope.getToastPosition());

            $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                    alert('You clicked \'OK\'.');
                }
            });
        };
    }
    function ToastCustomDemo ($scope, $mdToast) {
        $scope.closeToast = function() {
            $mdToast.hide();
        };        
    }

    function TooltipDemo($scope) {
        $scope.demo = {
            showTooltip : false,
            tipDirection : ''
        };

        $scope.$watch('demo.tipDirection',function(val) {
            if (val && val.length ) {
                $scope.demo.showTooltip = true;
            }
        })        
    }

    function SubheaderDemo($scope) {
        var imagePath = 'images/g1.jpg';
        $scope.messages = [
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ];     
    }

    function SelectDemo() {
        var self = this;
        
        self.userState = '';
        self.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });

        self.sizes = [
            "small (12-inch)",
            "medium (14-inch)",
            "large (16-inch)",
            "insane (42-inch)"
        ];
        self.toppings = [
            { category: 'meat', name: 'Pepperoni' },
            { category: 'meat', name: 'Sausage' },
            { category: 'meat', name: 'Ground Beef' },
            { category: 'meat', name: 'Bacon' },
            { category: 'veg', name: 'Mushrooms' },
            { category: 'veg', name: 'Onion' },
            { category: 'veg', name: 'Green Pepper' },
            { category: 'veg', name: 'Green Olives' }
        ];

    }

})();

(function () {
    'use strict';

    angular.module('app.ui')
        .controller('LoaderCtrl', ['$scope', '$rootScope', LoaderCtrl])
        .controller('ListCtrl', [ '$scope', '$mdDialog', ListCtrl])
        .controller('AlertDemoCtrl', ['$scope', AlertDemoCtrl])
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('AccordionDemoCtrl', ['$scope', AccordionDemoCtrl])
        .controller('CollapseDemoCtrl', ['$scope', CollapseDemoCtrl])
        .controller('ModalDemoCtrl', ['$scope', '$uibModal', '$log', ModalDemoCtrl])
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', ModalInstanceCtrl])
        .controller('PaginationDemoCtrl', ['$scope', PaginationDemoCtrl])
        .controller('TabsDemoCtrl', ['$scope', TabsDemoCtrl])
        .controller('TreeDemoCtrl', ['$scope', TreeDemoCtrl])
        .controller('MapDemoCtrl', ['$scope', '$http', '$interval', MapDemoCtrl]);


    function LoaderCtrl($scope, $rootScope) {

        $scope.start = function() {
            $rootScope.$broadcast('preloader:active');
        }
        $scope.complete = function() {
            $rootScope.$broadcast('preloader:hide');
        }
    }

    function ListCtrl ($scope, $mdDialog) {
        $scope.toppings = [
            { name: 'Pepperoni', wanted: true },
            { name: 'Sausage', wanted: false },
            { name: 'Black Olives', wanted: true }
        ];
        $scope.settings = [
            { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'zmdi zmdi-wifi-alt', enabled: true },
            { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'zmdi zmdi-bluetooth', enabled: false },
        ];
        $scope.messages = [
            {id: 1, title: "Message A", selected: false},
            {id: 2, title: "Message B", selected: true},
            {id: 3, title: "Message C", selected: true},
        ];
        $scope.people = [
            { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
            { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
            { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
        ];        
        $scope.goToPerson = function(person, event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Navigating')
                    .content('Inspect ' + person)
                    .ariaLabel('Person inspect demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
        $scope.navigateTo = function(to, event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Navigating')
                    .content('Imagine being taken to ' + to)
                    .ariaLabel('Navigation demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
        $scope.doSecondaryAction = function(event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Secondary Action')
                    .content('Secondary actions can be used for one click actions')
                    .ariaLabel('Secondary click demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
    }


    function AlertDemoCtrl($scope) {
        $scope.alerts = [
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.'
            }, {
                type: 'info',
                msg: 'Heads up! This alert needs your attention, but it is not super important.'
            }, {
                type: 'warning',
                msg: "Warning! Best check yo self, you're not looking too good."
            }, {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }
        ];

        $scope.addAlert = function() {
            var num, type;
            num = Math.ceil(Math.random() * 4);
            type = void 0;
            switch (num) {
            case 0:
                type = 'info';
                break;
            case 1:
                type = 'success';
                break;
            case 2:
                type = 'info';
                break;
            case 3:
                type = 'warning';
                break;
            case 4:
                type = 'danger';
            }
            return $scope.alerts.push({
                type: type,
                msg: "Another alert!"
            });
        };

        $scope.closeAlert = function(index) {
            return $scope.alerts.splice(index, 1);
        };
    }

    function ProgressDemoCtrl($scope) {
        $scope.max = 200;

        $scope.random = function() {
            var type, value;
            value = Math.floor((Math.random() * 100));
            type = void 0;
            if (value < 25) {
                type = "success";
            } else if (value < 50) {
                type = "info";
            } else if (value < 75) {
                type = "warning";
            } else {
                type = "danger";
            }
            $scope.showWarning = type === "danger" || type === "warning";
            $scope.dynamic = value;
            $scope.type = type;
        };

        $scope.random();

    }

    function AccordionDemoCtrl($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            }, {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }, {
                title: "Dynamic Group Header - 3",
                content: "Dynamic Group Body - 3"
            }
        ];

        $scope.items = ["Item 1", "Item 2", "Item 3"];

        $scope.status = {
            isFirstOpen: true,
            isFirstOpen1: true
        };

        $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };
    }

    function CollapseDemoCtrl($scope) {
        $scope.isCollapsed = false;
    }

    function ModalDemoCtrl($scope, $uibModal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }

    function ModalInstanceCtrl($scope, $uibModalInstance, items) {
        $scope.items = items;

        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function() {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };

    }

    function PaginationDemoCtrl($scope) {
        $scope.totalItems = 64;

        $scope.currentPage = 4;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.maxSize = 5;

        $scope.bigTotalItems = 175;

        $scope.bigCurrentPage = 1;
        }

        function TabsDemoCtrl($scope) {
        $scope.tabs = [
            {
                title: "Dynamic Title 1",
                content: "Dynamic content 1.    Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
            }, {
                title: "Disabled",
                content: "Dynamic content 2.    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
                disabled: true
            }
        ];

        $scope.navType = "pills";
    }

    function TreeDemoCtrl($scope) {
        $scope.list = [
            {id: 1, title: "Item 1", items: [] }, 
            {id: 2, title: "Item 2", items: [{id: 21, title: "Item 2.1", items: [{id: 211, title: "Item 2.1.1", items: [] }, {id: 212, title: "Item 2.1.2", items: [] } ] } ] },
            {id: 3, title: "Item 3", items: [] },
            {id: 4, title: "Item 4", items: [{id: 41, title: "Item 4.1", items: [] } ] },
            {id: 5, title: "Item 5", items: [] }
        ];

        $scope.selectedItem = {};

        $scope.options = {};

        $scope.remove = function(scope) {
            scope.remove();
        };

        $scope.toggle = function(scope) {
            scope.toggle();
        };

        $scope.newSubItem = function(scope) {
            var nodeData;
            nodeData = scope.$modelValue;
            nodeData.items.push({
                id: nodeData.id * 10 + nodeData.items.length,
                title: nodeData.title + "." + (nodeData.items.length + 1),
                items: []
            });
        };
    }

    function MapDemoCtrl($scope, $http, $interval) {
        var i, markers;

        markers = [];

        i = 0;

        while (i < 8) {
            markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            });
            i++;
        }

        $scope.GenerateMapMarkers = function() {
            var d, lat, lng, loc, numMarkers;
            d = new Date();
            $scope.date = d.toLocaleString();
            numMarkers = Math.floor(Math.random() * 4) + 4;
            i = 0;
            while (i < numMarkers) {
                lat = 43.6600000 + (Math.random() / 100);
                lng = -79.4103000 + (Math.random() / 100);
                loc = new google.maps.LatLng(lat, lng);
                markers[i].setPosition(loc);
                markers[i].setMap($scope.map);
                i++;
            }
        };

        $interval($scope.GenerateMapMarkers, 2000);
    }
    
})(); 
(function () {
    'use strict';

    angular.module('app.ui')
    .directive('uiWave', uiWave)
    .directive('uiTime', uiTime)
    .directive('uiNotCloseOnClick', uiNotCloseOnClick)
    .directive('slimScroll', slimScroll);


    function uiWave() {
        var directive = {
            restrict: 'A',
            compile: compile
        };

        return directive;

        function compile(ele, attrs) {
            ele.addClass('ui-wave');
            var ink, d, x, y;
            ele.off('click').on('click', function(e){

            // console.log(ele);
            var $this = $(this);
            if($this.find(".ink").length === 0){
                $this.prepend("<span class='ink'></span>");
            }

            ink = $this.find(".ink");
            ink.removeClass("wave-animate");

            if(!ink.height() && !ink.width()){
                d = Math.max($this.outerWidth(), $this.outerHeight());
                ink.css({height: d, width: d});
            }

            x = e.pageX - $this.offset().left - ink.width()/2;
            y = e.pageY - $this.offset().top - ink.height()/2;

            ink.css({top: y+'px', left: x+'px'}).addClass("wave-animate");
            });
        }    
    }

    function uiTime() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele) {
            var checkTime, startTime;

            startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
            };

            checkTime = function(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
            };

            startTime();
        }    
    }

    function uiNotCloseOnClick() {
        return {
            restrict: 'A',
            compile: function(ele, attrs) {
            return ele.on('click', function(event) {
                event.stopPropagation();
            });
            }
        };
    }

    function slimScroll() {
        return {
            restrict: 'A',
            link: function(scope, ele, attrs) {
            return ele.slimScroll({
                height: attrs.scrollHeight || '100%'
            });
            }
        };
    }

})(); 