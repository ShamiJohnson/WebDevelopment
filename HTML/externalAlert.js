/**************************************
 TITLE: externalAlert.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 5 July 2013
 PURPOSE: Alert message
 LAST MODIFIED ON: 24 Aug 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 24 Aug 2018: Add comments (EN)
 ***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function(){
                  
                  // Pop up a window that says "Here's a javascript test file!"
                  alert("Here's a javascript test file!");
                  
                  }); // end of $(document).ready()
