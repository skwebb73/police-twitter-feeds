$(document).ready(function() {
  console.log("ready");
  loadData();
});

function loadData(){
  $.getJSON("../finalcodes.json", function(policeData){
    console.log(policeData);
  });
};


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
});


function parseData(policeData){
//  console.log(classes[0].name);
  $("#data").append(html);
  buildCharts();
};

function buildCharts(){
  var chart = c3.generate({
      data: {
          json: {
            "Police Department": screen_name,
            "Race": race
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
