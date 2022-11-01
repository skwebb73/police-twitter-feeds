var black = [];
var white = [];

$(document).ready(function(){
  console.log("ready");
  loadData();
  });

function loadData(){
  $.getJSON("../byCounty.json", function (byCounty){
    console.log(byCounty);
    parseData(byCounty);
  })
}

function parseData(byCounty){
  //var html ="";
  $.each(byCounty, function(index){
    console.log(byCounty[index].black);
    //html += "<h2>"
    black.push(byCounty[index].black);
    white.push(byCounty[index].white);
  });
  buildCharts();
}

function buildCharts(){

  var chart = c3.generate({
    data: {
        json: {
          "Percent Black": black,
          "Percent White": white
        },
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});



}
//
// var filesToLoad = [];
// filesToLoad.push("../race-totals.json", "../byCounty.json");
// var data;
// var race =[];
// var total =[];
// var white = [];
// var black = [];
//
// for(var i=0;i<filesToLoad.length; i++){
//   loadData(filesToLoad[i]);
// };
//
// function loadData(url){
//   console.log(url);
//   $.ajax({
//     dataType: "json",
//     url: url,
//     data: data,
//     success: parseData
//   });
// };
//
// function parseData(data){
//     //console.log(data);
//     //var html = "";
//     $.each(data, function(index){
//       //console.log(data[index].total);
//       //console.log(index);
//       race.push(data[index].race);
//       total.push(data[index].total);
//       white.push(data[index].white);
//       black.push(data[index].black);
//     });
//     //$("#data").append(html);
//     buildCharts();
// }
//
// console.log("hi");
// console.log(black);

// function buildCharts(){
//   //console.log(race);
//   //console.log(total);
//   var chart = c3.generate({
//   data: {
//       json: {
//           //"Race": race,
//           "Total": total
//       },
//       type : 'bar',
//       onclick: function (d, i) { console.log("onclick", d, i); },
//       onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//       onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//   }
//
//   });
//
// };
//
// function buildCharts(){
//   var data = c3.generate({
//     data:{
//       json:{
//         ""
//       }
//     }
//   })
// }



//
//
//
//
// var race = [];
// var total = [];
//
//
// $(document).ready(function() {
//   console.log("ready");
//   loadData();
// });
//
// function loadData(){
//   $.getJSON("../race-totals.json", function(raceTotals){
//     console.log(raceTotals);
//     parseData(raceTotals );
//   });
// };
//
//
// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       columns: [
//         ['data1', 30, 200, 100, 400, 150, 250],
//         ['data2', 50, 20, 10, 40, 15, 25]
//       ]
//     }
// });

//
// function parseData(raceTotals){
//   $("#data").append(html);
//   buildCharts();
// };
//
// function buildCharts(){
//   var chart = c3.generate({
//       data: {
//           json: {
//             "Race": race,
//             "Percent": total
//           },
//           type: 'bar'
//       },
//       bar: {
//           width: {
//               ratio: 0.5 // this makes bar width 50% of length between ticks
//           }
//           // or
//           //width: 100 // this makes bar width 100px
//       }
//   });
// }
//
//
// //Trying to do thumbnails
// // function loadData(){
// //   $.getJSON("../finalcodes.json", function(imgCodes){
// //     console.log(imgCodes);
// //     parseData(imgCodes );
// //   });
// // };
// //
// // function parseData(imgCodes){
// //   var htmlThumbs = '';
// //
// //   htmlThumbs += '<img src="' + $(this).find("media_url").text() +'" width="100" height="100" alt="headshot"/>'
// //
// // }


//testing high buildChartsdocument.addEventListener('DOMContentLoaded', function () {
// const chart = Highcharts.chart('container', {
//             chart: {
//                 type: 'bar'
//             },
//             title: {
//                 text: 'Fruit Consumption'
//             },
//             xAxis: {
//                 categories: ['Apples', 'Bananas', 'Oranges']
//             },
//             yAxis: {
//                 title: {
//                     text: 'Fruit eaten'
//                 }
//             },
//             series: [{
//                 name: 'Jane',
//                 data: [1, 0, 4]
//             }, {
//                 name: 'John',
//                 data: [5, 7, 3]
//             }]
//         });

const chart = Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Race',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 37.73,

        }, {
            name: 'Black',
            y: 54.62
        },  {
            name: 'Hispanic/Latinx',
            y: 4.37
        }, {
            name: 'Asian/Pacific Islander',
            y: 0.26
        }, {
            name: 'Native American',
            y: 0.08
        },  {
            name: 'Unidentifiable',
            y: 2.93
        }]
    }]
});
