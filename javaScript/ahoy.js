/*
 TITLE: ahoy.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 7 November 2018
 PURPOSE: create a ahoy.js file to write on web page
 LAST MODIFIED ON: 7 November 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 7 November 2018: created ahoy (EN)
 */


/***
 Name:
    $(document).ready(function()
 Purpose:
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

$(document).ready(function(){






//First Requirement: Produce page output using $('p').html('message'); within a jQuery $(document).ready wrapper (no button needed).
$("p").html("Ahoy, matey! Let's write less and do more! Argh.");


//Second Requirement: Create a button that calls the jQuery append() method. Add text with a <br /> tag for readability.

/***
 Purpose:
 	The Purpose of this function is to attach a text to the <p> tag in the html code. Append is used to add the text at the end of the content. line break and bold properties are being used to make the text more readable.
  
 Parameters:
    N/A
 Return:
    N/A. 

 ***/


$("#btnAppend").click(function(){
        $("p").append(" <br><b>This is text written as an append, not an overwrite</b>.");
    });



//Third Requirement: Create a button that calls the jQuery html() method to replace text.
/***
 Purpose:
 	The Purpose of this function is to overwrite the content in the <p> tag. .html is used to overwrite. bold property is used in the message. 
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
$("#btnHTML").click(function(){
        $("p").html("<b>One of many jQuery ways to write to a page!</b>");
    });

  
                  }); // end of $(document).ready()

 