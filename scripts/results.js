
var counter =0;

//get all kill values and divs in arrays
//get all death values and divs in arrays
// get all assist values and divs in arrays

var kills = document.getElementsByClassName("kills");
var deaths = document.getElementsByClassName("deaths");
var assists = document.getElementsByClassName("assists");
var killCounter =0;

for(var i=0; i< kills.length; i++){
    //console.log(kills[i].innerHTML);
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
$( ".bardiv" ).each( function() {
    var killInt = parseInt(kills[killCounter].innerHTML);
    var deathInt = parseInt(deaths[killCounter].innerHTML);
    var assistInt = parseInt(assists[killCounter].innerHTML);
    
    var currentTotal = (killInt + deathInt + assistInt);

    var killPerc = (killInt / currentTotal) * 85;
    var killString = `${killPerc}px`

    console.log("killString: " + killString);

    var deathPerc = (deathInt / currentTotal) * 85;
    var deathString = `${deathPerc}px`

    console.log("deathString: " + deathString);

    var assistPerc = (assistInt / currentTotal) * 85;
    var assistString = `${assistPerc}px`
    
    console.log("assistString: " + assistString);

    $(this).find(".killdiv").css( "width", killString );
    $(this).find(".deathdiv").css( "width", deathString );
    $(this).find(".assistdiv").css( "width", assistString );
    //console.log($(this).children()[0]);
    killCounter++;
    
});