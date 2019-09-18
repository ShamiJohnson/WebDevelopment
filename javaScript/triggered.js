/*
 TITLE: triggered.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 14 November 2018
 PURPOSE: create a triggered.js file to write on web page
 LAST MODIFIED ON: 14 November 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 14 November 2018: created triggered (EN)
 */



/***
 Name:
    $(window).load(function()
 Purpose:
 The purpose of this function is to create a webpage without using the document.ready function. this function is responsible for carrying other function and the child functions will run once the page is fully loaded. 
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

$(window).load(function(){
//function call for when the user resize the window. 
$(window).resize(run_resizeWindow);
/***
 Name:run_resizeWindow
 Purpose:if the user resizes the window then the background color of the text will change color. 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function run_resizeWindow(){
    $( "#resize" ).css({'background-color': 'coral'});
}
//function calls for mouse activities 
$(".mouse").mouseenter(run_MouseEnter);
$(".mouse").mouseleave(run_MouseLeave);
$(".mouse").click(run_MouseClick);

/***
 Name:run_MouseEnter
 Purpose:if the user hovers over the element then the background color will change. 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function run_MouseEnter(){
        $(this).css("background-color", "lightgray");
    };

/***
 Name:run_MouseLeave
 Purpose:if the user leaves the targetted elemant then the text's background will change color 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function run_MouseLeave(){
        $(this).css("background-color", "lightblue");
    };

/***
 Name:run_MouseClick
 Purpose:if the user clicks the element acociated with this then the element will hide. 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
    function run_MouseClick(){
        $(this).hide(1000);
    };

//function call for keypress
$("input").keypress(run_keypress);

i = 0;
/***
 Name:run_keypress
 Purpose:this counts the user's activity on the keyboard. this function counts spaces, arrow keys and any other keyboard related activities. this function uses a variable with a global scope called i. 
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
function run_keypress(){
        $("span").text(i += 1);
    }



});















    