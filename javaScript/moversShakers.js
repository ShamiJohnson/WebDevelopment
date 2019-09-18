/*
 TITLE: moverShakers.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 14 November 2018
 PURPOSE: create a moverShakers.js file to write on web page
 LAST MODIFIED ON: 14 November 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 14 November 2018: created moverShakers (EN)
 */




/***
 Name:
    $(document).ready(function()
 Purpose:
 The purpose of this function is to display content with effects and animations on the webpage using jquery 
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
$(document).ready(function() {
    
      //  Function calls 
      $( "#show").click( show );
      $( "#hide").click( hide );
      $( "#toggle").click( toggle );
      $( "#slideUP").click( slideUP );
      $( "#slideDown").click( slideDown );
      $( "#fadeIn").click( fadeIn );
      $( "#fadeOut").click( fadeOut );
      $( "#chaining").click( chaining );
      $( "#MultipleParameters").click( MultipleParameters );
    
    

   //  Functions 
 /***
 Name:show()
 Purpose:to use the show effect to manipulate the html picture 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function show() {
        $( "#target" ).show(1000);}
 /***
 Name:hide()
 Purpose: the purpose of this function is to hide the picture if the user clicks on the linked button
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function hide() {
        $( "#target" ).hide();}

       
 /***
 Name:toggle()
 Purpose: the purpose of this function is to hide and show the picture with only using one toggle button
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function toggle() {
        $( "#target" ).toggle();}

 /***
 Name: slideUP()
 Purpose: the purpose of this function is to slide the picture up and give it a dissapearing effect 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function slideUP() {
        $( "#target" ).slideUp();}

 /***
 Name: slideDown()
 Purpose: the purpose of this function is to slide the picture down and give it a reapearing effect
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function slideDown() {
        $( "#target" ).slideDown();}

 /***
 Name:fadeIn()
 Purpose:the purpose of this function is to slowly complete the picture again with a fading effect
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function fadeIn() {
        $( "#target" ).fadeIn();}


 /***
 Name:fadeOut()
 Purpose: the purpose of this function is to slowly dissapear the picture 
 Parameters:
    N/A
 Return:
    N/A
 ***/
    function fadeOut() {
        $( "#target" ).fadeOut();}

 /***
 Name:chaining()
 Purpose: the purpose of this function is to link multiple methods together for a nice animation effect
 Parameters:
    N/A
 Return:
    N/A
 ***/
    function chaining() {
        $( "#target" ).hide().show(1000).toggle().toggle().slideUp().slideDown().fadeIn().fadeOut().show(1500);}

 /***
 Name: MultipleParameters()
 Purpose: the purpose of this function is to use multiple css parameters to move the picture 
 Parameters:
    N/A
 Return:
    N/A
 ***/
    function MultipleParameters() {
        $( "#target" ).fadeIn().css({'paddingTop':'+=40',
            'paddingLeft':'+=40'});}






        /******************** Animation BlackBelt ***********************/



//Function calls 
      $( "#topEdge").click( topEdge );
      $( "#BottomEdge").click( BottomEdge );
      $( "#LeftEdge").click( LeftEdge );
      $( "#RightEdge").click( RightEdge );
      $( "#NudgeRight").click( NudgeRight );
       $( "#NudgeLeft").click( NudgeLeft );
       $( "#Glide").click( Glide );
      $( "#Easing").click( Easing );
       $( ".Reset").click( Reset );

 /***
 Name: topEdge()
 Purpose: the purpose of this function is to slide the picture to the top
 Parameters:
    N/A
 Return:
    N/A
 ***/
function topEdge() {
        $( "#target" ).animate({paddingTop:"-=310px"});
    }  

 /***
 Name: BottomEdge()
 Purpose: the purpose of this function is to slide the picture down 
 Parameters:
    N/A
 Return:
    N/A
 ***/
function BottomEdge() {
        $( "#target" ).animate({paddingTop:"+=310px"});
    }  

 /***
 Name: LeftEdge()
 Purpose: the purpose of this function is to slide the picture left
 Parameters:
    N/A
 Return:
    N/A
 ***/
function LeftEdge() {
        $( "#target" ).animate({paddingLeft:"-=310px"});
    }  

 /***
 Name: RightEdge()
 Purpose: the purpose of this function is to slide the picture right
 Parameters:
    N/A
 Return:
    N/A
 ***/
function RightEdge() {
        $( "#target" ).animate({paddingLeft:"+=310px"});
    }  


 /***
 Name: NudgeRight()
 Purpose: the purpose of this function is to move the picture to the right a little 
 Parameters:
    N/A
 Return:
    N/A
 ***/
function NudgeRight() {
        $( "#target" ).animate({paddingLeft:"+=50px"});
    }

 /***
 Name: NudgeLeft()
 Purpose: the purpose of this function is to move the picture to the left a little 
 Parameters:
    N/A
 Return:
    N/A
 ***/
function NudgeLeft() {
        $( "#target" ).animate({paddingLeft:"-=50px"});
    }


 /***
 Name: Glide()
 Purpose: the purpose of this function is to move the picture in a gliding effect
 Parameters:
    N/A
 Return:
    N/A
 ***/
function Glide() {
        $( "#target" ).animate({paddingTop:"-=310px",
            paddingLeft:"-=400px"}).animate({paddingTop:"+=310px",
            paddingLeft:"+=400px"});
    }  


 /***
 Name: Easing()
 Purpose: the purpose of this function is to use multiple parameter. swing parameter is not used because by default swing is used by the browsers. a lot of functions are being called in order to make the picture move.
 Parameters:
    N/A
 Return:
    N/A
 ***/
function Easing() {
        $( "#target" ).animate({}, 500, function() {
      $(topEdge());
      $(LeftEdge());
      $(topEdge());
      $(BottomEdge());
      $(LeftEdge());
      $(RightEdge());
      $(NudgeRight());
      $(NudgeLeft());
      $(topEdge());
      $(LeftEdge());
      $(NudgeRight());
      $(NudgeRight());
      $(LeftEdge());

    });
    }


 /***
 Name: Reset()
 Purpose: the purpose of this function is to reset the entire page. 
 Parameters:
    N/A
 Return:
    N/A
 ***/
function Reset() {
        location.reload(true);
    } 


});







