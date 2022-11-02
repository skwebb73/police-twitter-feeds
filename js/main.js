var white = [];
var black = [];
var hispanicLatinx = [];
var asianPacificIslander = [];
var unidentifiable = [];
var nativeAmerican = [];
var raceTotals = [];
var race = [];
var finalCodes = [];
var mediaUrl = [];
var finalCodes2 =[];
var acisWhite = [];
var acisBlack = [];
var acisHispanic = [];
var popBlack = [];

$(document).ready(function(){
  console.log("ready");
  loadData();
  loadData2();
  loadData3();
  loadData4();
  });

function loadData(){
  console.log("loadData");
  $.getJSON("../byCounty.json", function (byCounty){
    console.log(byCounty);
    parseData(byCounty);
  })
}

function parseData(byCounty){
  console.log("parseData");
  //var html ="";
  $.each(byCounty, function(index){
    console.log(byCounty[index].black);
    //html += "<h2>"
    white.push(byCounty[index].white);
    black.push(byCounty[index].black);
    hispanicLatinx.push(byCounty[index].hispanicLatinx);
    asianPacificIslander.push(byCounty[index].asianPacificIslander);
    unidentifiable.push(byCounty[index].unidentifiable);
    nativeAmerican.push(byCounty[index].nativeAmerican);
  });
  buildCharts();
}

function buildCharts(){
  console.log("buildCharts");
  var charttest = c3.generate({
      bindto: '#chart3',
     data: {
        json: {
          "White": white,
          "Black": black,
          "Hispanic/Latinx": hispanicLatinx,
          "Asian/Pacific Islander": asianPacificIslander,
          "Native American": nativeAmerican,
          "Unidentifiable": unidentifiable

        },

        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
      x: {
          type: 'category',
          categories: ['Allegheny', 'Asheville', 'Charlotte', 'Fayetteville', 'Henderson', 'Huntersville', 'Raleigh', 'Wilmington']
      }
  },
  title: {
    text:'Percent demographics of who each law enforcement account posted on Twitter'
  },
});

}

//Race Totals:

function loadData2(){
  console.log("loadData2");
  $.getJSON("../race-totals.json", function (raceTotals){
    console.log(raceTotals);
    parseData2(raceTotals);
  })
}

function parseData2(raceTotals){
  $.each(raceTotals, function(index){
    console.log(raceTotals[index].total);
    raceTotals.push(raceTotals[index].total);
    race.push(raceTotals[index].race);
  });
  buildCharts2();
}


function buildCharts2(){
  console.log("buildCharts2");
  const chart = Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Total percent demographics by race of who was posted by N.C. law enforcement Twitter accounts studied'
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


};

console.log("this worked");

function loadData3(){
  console.log("loadData3");
  $.getJSON("../finalcodes.json", function (finalCodes){
    //console.log(finalCodes);
    console.log(finalCodes)
    parseData3(finalCodes);

  })
}
var tempCount =0;
function parseData3(finalCodes){
  console.log("parseData3");
  var htmlThumbs='';

  $.each(finalCodes, function(index){
    //console.log(finalCodes[index].raceCodes);
    finalCodes2.push(finalCodes[index]);
    //race.push(raceTotals[index].race);
    mediaUrl.push(finalCodes[index].media_url);
    //console.log(mediaUrl);
    if(index <910 ){
      tempCount ++
    htmlThumbs += '<img class="thumbsClass" src="' + finalCodes2[index].mediaUrl + '" width="100" height="100" alt="portrait"/>';
    }



  });
console.log(tempCount);


  $("#thumbs").append(htmlThumbs);
  console.log(finalCodes2);
console.log("pre dataTable()");
  $('#tableId').DataTable({
          "scrollX": true,
          data: finalCodes2,
          columns: [
            {"data": 'date', title: 'Date'},
            {"data": 'account', title: 'Account'},
            //{"data": 'text', title: 'Text of Tweet'},
            {"data": 'favoriteCount', title: 'Number of Likes'},
            {"data": 'retweetCount', title: 'Number of Retweets'},
            {"data": 'mediaType', title: "Type of Image"},
            {"data": 'mediaUrl', title: 'Link to Image'},
            {"data": 'human', title: 'Human'},
            {"data": 'humanCount', title: 'Number of Humans'},
            {"data": 'type', title: "Image Type"},
            {"data": 'raceCode', title: "Race Code"},
            {"data": 'raceConfidence', title: "Race Confidence"},
            {"data": 'gender', title: 'Gender Code'},
            {"data": 'genderConfidence', title: 'Gender Confidence'},
            {"data": 'comments', title: "Researcher Comments"},
            {"data": 'county', title: "County Name"},
            {"data": 'coder', title: "Researcher"},
          ],

  });

}

//acis data
function loadData4(){

  $.getJSON("../acisjson.json", function (acis){
    console.log(acis);
    parseData4(acis);
  })
}

function parseData4(acis){
  //var html ="";
  $.each(acis, function(index){
    //console.log(acis[index].black);
    //html += "<h2>"
    acisWhite.push(acis[index].acisWhite);
    acisBlack.push(acis[index].acisBlack);
    acisHispanic.push(acis[index].acisHispanic);
    popBlack.push(acis[index].popBlack);

  });
  buildCharts4();
}

function buildCharts4(){
  //console.log("buildCharts");
  var charttest = c3.generate({
      bindto: '#chart4',
     data: {
        json: {
          "White": acisWhite,
          "Black": acisBlack,
          "Hispanic": acisHispanic,
          "Overall Black Population Percent": popBlack,

        },

        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
      x: {
          type: 'category',
          categories: ['Allegheny', 'Asheville', 'Charlotte', 'Fayetteville', 'Henderson', 'Huntersville', 'Raleigh', 'Wilmington']
      }
  },
  title: {
    text:'Demographics by race of who was arrested by the law enforcement agencies studied according to ACIS data'
  },
});

}


//$.ajax({
//     dataType: "json",
//     url: url,
//     data: data,
//     success: parseData





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
