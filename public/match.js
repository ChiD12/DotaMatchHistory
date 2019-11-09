var counter =0;

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