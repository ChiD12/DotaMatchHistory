
var counter =0;




$( ".matchDiv" ).each(function() {
    if(counter++ %2 !==0){
        $( this ).addClass( "reverseDiv" );
    }
  });

$( ".winner" ).each( function() {
    console.log($(this).text());
    if($(this).text().trim().localeCompare("Won Match") === 0){
        $(this).css('color', 'green');
    }else{
        $(this).css('color', 'red');   
    }
    //$( this ).addClass( "win" );
});