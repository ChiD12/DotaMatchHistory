
var counter =0;




$( ".matchDiv" ).each(function() {
    if(counter++ %2 !==0){
        $( this ).addClass( "reverseDiv" );
    }
  });