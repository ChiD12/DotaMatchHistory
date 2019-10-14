
var counter =0;

//get all kill values and divs in arrays
//get all death values and divs in arrays
// get all assist values and divs in arrays

var kills = document.getElementsByClassName("kills");

for(var i=0; i< kills.length; i++){
    console.log(kills[i].innerHTML);
}

// $( ".kills" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });



$( ".matchDiv" ).each(function() {
    if(counter++ %2 !==0){
        $( this ).addClass( "reverseDiv" );
    }
  });

$( ".winner" ).each( function() {

    if($(this).text().trim().localeCompare("Won Match") === 0){
        $(this).css('color', 'green');
    }else{
        $(this).css('color', 'red');   
    }
    //$( this ).addClass( "win" );
});

//go through each element 