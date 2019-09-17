
var counter =0;



// divs.forEach(div => {
//     if(counter++ %2 ===0){
//         div.addClass(reverseDiv);
//     }
// });

$( "div" ).each(function() {
    if(counter++ %2 !==0){
        $( this ).addClass( "reverseDiv" );
    }
  });