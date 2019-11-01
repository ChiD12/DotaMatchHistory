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