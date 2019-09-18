/*
 TITLE: loops.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 26 September 2018
 PURPOSE: create a loops.js file to write on web page
 LAST MODIFIED ON:  3 October 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 3 October 2018: created document.ready function (EN)
 */


/***
 Name:
 $(document).ready()
 Purpose:
  The purpose of this function is to use arrays to display true/false output bases on the binary numbers where 1=true and 0=false.

 Parameters:
    N/A
 Return:
    N/A
 
 ***/
$(document).ready(function()
{
    var strQuestion = "Enter 'One' character matey, Argh!";//Holds quiestion string. Used in Prompt 
    var strDefaultAns = "A"; //Holds a default answer value 
    var chrCharacter = ""; //Gets the user's response. Used to get the ascii value of the input
    var chrLength = 0;    //sets the length value to 0. this will be used in while loop.

//This while loop is responsible for repating the prompt until the correct input is provided to the program
    while (chrLength != 1){
      chrCharacter = prompt(strQuestion, strDefaultAns);//prompt the user a question.
      chrLength = chrCharacter.length;   //this gets the string value of chrCharacter and then stores it in the chrLength variable. which is used to repeat the loop until the user inputs ONLY 1 response
    }


    var array = [];                           //Empty array is created so the binary value can be stored here. 
    intAscii = parseAscii(chrCharacter);      //int variable is declared  to hold the parseAscii function value
    strBin = parseBin(intAscii);              //int variable is declared  to hold the parseBin function value
    array = strBin.split("");                 //Split method used so the determine the individual index values 

      //Empty array: the true/false value will be stored here 2
  var results = [];       
            

/*****          
    Purpose: A foreach function. this function is used to push the true or false strings in the variable array results. This function compares 0 and ones and according to that runs the function.     
    Parameters: binary: this is the only parameter i am using which helps in getting the value of the of the current index and then i am able to compare the values in a if statement.       
    Return: N/A. There is NO return value, However a True/False string is being pushed for each element in the array. 
    *****/

  array.forEach(function(binary) {                // For each binary
    if (binary == 1) {                            //compares the index values
      results.push("True");                        // If yes add to array
    }
    else if (binary == 0) {                         //compares the index values
      results.push("False");                        // If yes add to array
    }
  });


//The element ID is taken from the HTML page and will be used to display a message. 
    var output = document.getElementById("output");
//Final result is displayed using innerHTML 
    output.innerHTML = results;


    }); //end document.ready



    /*****          
    Purpose: The Purpose is to convert a character into ascii        
    Parameters: Only 1 parameter is given here called chrCharacter. This parameter holds the user's input value.      
    Return: integer representing of an ascii value is being returned in intAscii
    *****/
    function parseAscii(chrCharacter)
    {
        intAscii = chrCharacter.charCodeAt(0);
        return intAscii;
    }

    /*****          
    Purpose: The purpose of this function is to take the ascii code and turns it into binary code.          
    Parameters: The returned value from the parseAscii function is being used here to convert the code in binary representation. 
    Return: strBin is being returned. thi is a binary base 2 representation. This value will be used to display the result on the web as true or false
    *****/
    function parseBin(intAscii)
    {
        strBin = parseInt(intAscii, 10).toString(2);
        if(strBin.length < 8)
        {
            var intPlaceHolders = 8 - strBin.length;
            for(var i = 0; i < intPlaceHolders; i++)
            {
                strBin = "0" + strBin;
            }

        }

        return strBin;
    }


