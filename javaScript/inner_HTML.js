/*
 TITLE: inner_HTML.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 4 September 2018
 PURPOSE: Create inner html to write on web page
 LAST MODIFIED ON: 4 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 4 September 2018: created document.ready function (EN)
 */

$(document).ready(function(){
                  
                  // Create variable to hold the name and note text.
                  var message_innerHTML;
                  // Assign values to variable.
                  message_innerHTML = "<strong>I enjoy a good sea chantry with me first mate.</strong>";
                  // Get the element with an id of name.
                  var get_innerHTML = document.getElementById('inner_html');
                  // Replace the content of this element.
                  get_innerHTML.innerHTML = message_innerHTML;
                  
                  
                  
                  }); // end of $(document).ready()
