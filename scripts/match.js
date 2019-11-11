




//var Chart = require('chart.js');
var counter =0;
var colorCounter=0;
var ctx = document.getElementById('myChart');

var gAdv = document.getElementById("gAdv").innerHTML;
var xpAdv = document.getElementById("xpAdv").innerHTML;

var gAr = gAdv.split(',');
var xpAr = xpAdv.split(',');

var labels = [''];

var gIntAr= [0];
var xpIntAr=[0];
var colorGAr= ['rgba(255, 99, 132, 0.2)']
var colorxpAr= ['rgba(255, 99, 132, 0.2)']
var min=0;
var max=0;


console.log(gAr);
for(var i=0; i< gAr.length; i++){
    gIntAr[i] = parseInt(gAr[i]);
    xpIntAr[i] = parseInt(xpAr[i]);

    if(i%2 === 0){
        labels[i] = i + ":00";
    }else{
        labels[i] ="";
    }

    if(gIntAr[i] < min){
        min = gIntAr[i];
    }
    if(gIntAr[i] > max){
        max = gIntAr[i];
    }
    if(xpIntAr[i] < min){
        min = xpIntAr[i];
    }
    if(xpIntAr[i] > max){
        max = xpIntAr[i];
    }
    if(gIntAr[i] >= 0){
        colorGAr[i] = 'rgba(0, 128, 0, 0.3)';
    }else{
        colorGAr[i] ='rgba(255, 0, 0, 0.3)';
    }if(xpIntAr[i] >= 0){
        colorxpAr[i] = 'rgba(0, 128, 0, 0.3)';
    }else{
        colorxpAr[i] ='rgba(255, 0, 0, 0.3)';
    }
}

colorGAr[0]= 'rgba(255, 165, 0, 1)'
colorxpAr[0]= 'rgba(255, 255, 255, 1)'


$(".heroI").each(function() {
    switch(colorCounter){
        case 0: $(this).attr('id', 'one');
        break;
    }
    switch(colorCounter){
        case 1: $(this).attr('id', 'two');
        break;
    }
    switch(colorCounter){
        case 2: $(this).attr('id', 'three');
        break;
    }
    switch(colorCounter){
        case 3: $(this).attr('id', 'four');
        break;
    }switch(colorCounter){
        case 4: $(this).attr('id', 'five');
        break;
    }switch(colorCounter){
        case 5: $(this).attr('id', 'six');
        break;
    }switch(colorCounter){
        case 6: $(this).attr('id', 'seven');
        break;
    }switch(colorCounter){
        case 7: $(this).attr('id', 'eight');
        break;
    }
    switch(colorCounter){
        case 8: $(this).attr('id', 'nine');
        break;
    }switch(colorCounter){
        case 9: $(this).attr('id', 'ten');
        break;
    }
    colorCounter++;
  });

$( ".playerDiv" ).each(function() {
    if(counter++ %2 !==0){
        $( this ).addClass( "reverseDiv" );
    }
  });

  
jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

$(".laneDiv").mouseenter(function() {
    $(".laneDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".laneDiv").mouseleave(function(){
    $(".laneDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
});

$(".lvlDiv").mouseenter(function() {
    $(".lvlDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".lvlDiv").mouseleave(function(){
    $(".lvlDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".kills").mouseenter(function() {
    $(".kills").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".kills").mouseleave(function(){
    $(".kills").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".dnDiv").mouseenter(function() {
    $(".dnDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".dnDiv").mouseleave(function(){
    $(".dnDiv").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".assists").mouseenter(function() {
    $(".assists").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".assists").mouseleave(function(){
    $(".assists").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".LH").mouseenter(function() {
    $(".LH").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".LH").mouseleave(function(){
    $(".LH").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".denies").mouseenter(function() {
    $(".denies").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".denies").mouseleave(function(){
    $(".denies").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".gpm").mouseenter(function() {
    $(".gpm").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".gpm").mouseleave(function(){
    $(".gpm").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".xpm").mouseenter(function() {
    $(".xpm").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".xpm").mouseleave(function(){
    $(".xpm").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".HD").mouseenter(function() {
    $(".HD").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".HD").mouseleave(function(){
    $(".HD").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".TD").mouseenter(function() {
    $(".TD").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".TD").mouseleave(function(){
    $(".TD").each( function(){
        $(this).toggleClass('gray',30000);
    })
});
$(".G").mouseenter(function() {
    $(".G").each( function(){
        $(this).toggleClass('gray',30000);
    })
    
});
$(".G").mouseleave(function(){
    $(".G").each( function(){
        $(this).toggleClass('gray',30000);
    })
});

require(['Chart.min.js'], function(Chart){
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            fontColor: 'white',
            
            datasets: [{
                label: 'Gold Advantage',
                data: gIntAr,
                backgroundColor: colorGAr,
                borderColor: colorGAr,
                borderWidth: 1,
                fill: false,
                
            },{
                
                    label: 'XP Advantage',
                    data: xpIntAr,
                    backgroundColor: colorxpAr,
                    borderColor: colorxpAr,
                    borderWidth: 1,
                    fill: false,
                    
                
            }
        ]
        },
        
        
        options: {
            
            
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: (min -500),
                        suggestedMax: (max + 500),
                        steps: 2500,
                        
                    }
                }]
            }
        }
    });
    
});

