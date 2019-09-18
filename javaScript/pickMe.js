/*
 TITLE: pickMe.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 24 November 2018
 PURPOSE: create a pickMe.js file to write on web page
 LAST MODIFIED ON: 7 November 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 24 November 2018: created pickMe (EN)
 */


/***
 Name:
    $(document).ready(function()
 Purpose:
 The purpose of this program is to display content on the webpage using jquery 
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/



$(document).ready(function(){






//if the user clicks this button then run the following code 
$("#button1").click(runbutton1);
$("#button2").click(runbutton2);
$("#button3").click(runbutton3);
$("#button4").click(runbutton4);
$("#button5").click(runbutton5);
$("#button6").click(runbutton6);
$("#button7").click(runbutton7);


 /***
 Name:
   runbutton1()
 Purpose:
  //Button1 will demonstrate jQuery selection by tag.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function runbutton1(){
    $("p").css({'color': 'blue'}).append("jQuery selection by tag");
}


/***
 Name:runbutton2()
   
 Purpose:
  //Button2 will demonstrate jQuery selection by class.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

function runbutton2(){
    $(".NOTBrave").css({'color': 'green'}).append("jQuery selection by class");
}



/***
 Name:runbutton3()
   
 Purpose://Button3 will demonstrate jQuery selection by id.
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

function runbutton3(){
    $("#Crew5_PICK").css({'background-color': 'coral'}).append("jQuery selection by id");
}



/***
 Name:runbutton4()
   
 Purpose:
  //Button4 will apply multiple instructions to a jQuery selection in a single line of code.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function runbutton4(){
    $("#Crew6_PICK").css({'color': 'blue'}).append("multiple instructions").fadeOut('slow').css({'background-color':'orange'});
}






/***
 Name:runbutton5()
   
 Purpose://Button5 will demonstrate filtered jQuery selection by tag.
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function runbutton5(){
    $("ul:parent").css({'border': '2px solid red'});
}





/***
 Name:
   runbutton6()
 Purpose:
  //Button6 will demonstrate filtered jQuery selection by class.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function runbutton6(){
    $(".classBrave:first").css({'color': 'pink'});
}





/***
 Name:
 runbutton7()
 Purpose:
  //Button7 will demonstrate filtered jQuery selection by id.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function runbutton7(){


  $("#Crew9_PICK:visible").append("By ID").css('background-color', 'yellow');



    
}



}); // end of $(document).ready()

 