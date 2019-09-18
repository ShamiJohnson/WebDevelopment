/*
 TITLE: text_content.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 4 September 2018
 PURPOSE: create a text_content.js file to writ on web page
 LAST MODIFIED ON: 4 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 4 September 2018: created document.ready function (EN)
 
 */

$(document).ready(function(){
                  
                  
                  // Create variable to hold the name and note text. // Assign values to variable.
                  var strMessage = "I be from across t' computer science sea.";
                  // Get the element with an id of name.
                  var newMessage = document.getElementById('text_Content');
                  // Replace the content of this element.
                  newMessage.textContent = strMessage;
                  
                  
                  
                  }); // end of $(document).ready()

