/*
 TITLE: functions.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 12 September 2018
 PURPOSE: create a functions.js file to write on web page
 LAST MODIFIED ON: 12 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 12 September 2018: created functions (EN)
 15 September 2018: Updated comments to meet lab requirements. gave functions unique parameter names.
 */




/***
 Name:
    $(document).ready(function()
 Purpose:
    The purpose of this function is to create variales and give those variables values. Two empty strings are created and then given values and a number variable is given the value of 5 as described in the assignment details. IDs and other feilds are linked together in the right order to parse the information correctly.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

$(document).ready(function(){
                  
                   // Requirement 5: Call the function at least five times.
                  
                  //Creating and Storing Captain's Message
                  var strMessage = "";
                  var feet ="";
                  feet = " feet";
                  strMessage = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var Number = 5;
                  //First Function call with unique parameters
                  /***
                   Purpose: calling a function called writeToPage()
                   Parameters:
                   first- links ID from html page and writeToPage function
                   strMessage- Links the first string with the function writeToPage
                   Number- Links the Number with the second value in the function parameter for writeToPage
                   feet- Links the last string with the function writeToPage
                   Return:
                   N/A
                   ***/
                  writeToPage("first", strMessage, Number, feet);
                  
                  
                  //Creating and Storing Captain's Message
                  var strMessageSecond = "";
                  var feetSecond ="";
                  feetSecond = " feet";
                  strMessageSecond = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberSecond = 5;
                  //Second Function call with unique parameters
                  /***
                   Purpose: calling a function called writeToPage()
                   Parameters:
                   second- links ID from html page and writeToPage function
                   strMessageSecond- Links the first string with the function writeToPage
                   NumberSecond- Links the Number with the second value in the function parameter for writeToPage
                   feetSecond- Links the last string with the function writeToPage
                   Return:
                   N/A
                   ***/
                  writeToPage("second", strMessageSecond, NumberSecond, feetSecond);
                  
                  
                  //Creating and Storing Captain's Message
                  var strMessageThird = "";
                  var feetThird ="";
                  feetThird = " feet";
                  strMessageThird = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberThird = 5;
                  //Third Function call with unique parameters
                  /***
                   Purpose: calling a function called writeToPage()
                   Parameters:
                   third- links ID from html page and writeToPage function
                   strMessageThird- Links the first string with the function writeToPage
                   NumberThird- Links the Number with the second value in the function parameter for writeToPage
                   feetThird- Links the last string with the function writeToPage
                   Return:
                   N/A
                   ***/
                  writeToPage("third", strMessageThird, NumberThird, feetThird);
                  
                  
                  //Creating and Storing Captain's Message
                  var strMessageFourth = "";
                  var feetFourth ="";
                  feetFourth = " feet";
                  strMessageFourth = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberFourth = 5;
                  //Fourth Function call with unique parameters
                  /***
                   Purpose: calling a function called writeToPage()
                   Parameters:
                   fourth- links ID from html page and writeToPage function
                   strMessageFourth- Links the first string with the function writeToPage
                   NumberFourth- Links the Number with the second value in the function parameter for writeToPage
                   feetFourth- Links the last string with the function writeToPage
                   Return:
                   N/A
                   ***/
                  writeToPage("fourth", strMessageFourth, NumberFourth, feetFourth);
                  
                  
                  //Creating and Storing Captain's Message
                  var strMessageFifth = "";
                  var feetFifth ="";
                  feetFifth = " feet";
                  strMessageFifth = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberFifth = 5;
                  //Fifth Function call with unique parameters
                  /***
                   Purpose: calling a function called writeToPage()
                   Parameters:
                        fifth- links ID from html page and writeToPage function
                        strMessageFifth- Links the first string with the function writeToPage
                        NumberFifth- Links the Number with the second value in the function parameter for writeToPage
                        feetFifth- Links the last string with the function writeToPage
                   Return:
                   N/A
                   ***/
                  writeToPage("fifth", strMessageFifth, NumberFifth, feetFifth); //information is passed in it

                  }); // end of $(document).ready()

/***
 Name:
    writeToPage
 
 Purpose:
    Displays the result in an ordered concatenated string. The functions is called 5 times by the (document).ready(function());
 Parameters:
    strID - gets the id from the (document).ready(function()). The information is stored in an ordered list linking each item with the correct parameter value. By doing this, I was able to use the same function for 5 different function calls effectively.
    strMsg - the value of first string is stored in it, which is the first part of the captain's message. this parameter gets the value of string through the help of a specific ID
    num - value of Number is stored, the function is able to get each feet value independently and then display the information or use it however it is required because the value is still a number, not a string.
    ft - value of feet is stored, different feet values can be stored in this parameter value and can be manipulated independently
 
 Return:
    N/A
 
 ***/



  // Requirement 1: Create a function that accepts 4 parameters: the <div id> for output, and a number, and two strings.
function writeToPage(strID, strMsg, num, ft){ // Requirement 2 : The function should concatenate the first string, the number, and the second string into a combined string of original text and add that text to the page.
    
    var elOutput = document.getElementById(strID); //this is able to get the id value for each parameter
    
   
        elOutput.textContent = strMsg + num + ft;   // Requirement 3: The function should output to the page using textContent - not alert!

}












