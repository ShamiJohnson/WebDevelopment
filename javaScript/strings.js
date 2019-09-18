/*
 TITLE: strings.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 10 October 2018
 PURPOSE: create a strings.js file to write on web page
 LAST MODIFIED ON:  3 October 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 10 October 2018: created document.ready function (EN)
 */


/***
 Name:
 $(document).ready()
 Purpose: The purpose of this program is to take the user's input and then use some string functions to print the ship names on the web page.
  
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
$(document).ready(function()
{

    var strQuestion = "Enter Queen's significant other or friend's name";//Holds quiestion string. Used in Prompt 
    var strDefaultAns = "charles"; //Holds a default answer value 
    var userInput = ""; //Gets the user's response. Used to get the ascii value of the input
    userInput = prompt(strQuestion, strDefaultAns);//prompt the user a question.



var input_Trim = userInput.trim() ; //trims the white space from the beginning and the end

var newUserInput = input_Trim + " replacetemp"; //adds it to the string creating a new one

var input_Lower = newUserInput.toLowerCase() ; //converting the string to lowercase 
var input_charAt = input_Lower.charAt(0) ;//Gets the first index value of the string
var input_Upper = input_charAt.toUpperCase() ;//converts the first string index value to uppercase

var input_indexOf = input_Lower.indexOf('replacetemp'); //gets the index number where 'r' is located 
var input_Substring = input_Upper + input_Lower.substring(1, input_indexOf);//gets the first index value of string and adds it to the rest of the string

var input_Replace = input_Substring + "replaceTemp";//holds the complete user input string and then it adds a replacement string to it 


//Creating new ship names using user's input and the replace method
var firstShip = input_Replace.replace('replaceTemp', 'The Conquerer');
var secondShip = input_Replace.replace('replaceTemp', 'The Destroyer');
var thirdShip = input_Replace.replace('replaceTemp', 'Black Beard');
var fourthShip = input_Replace.replace('replaceTemp', 'Black Pearl');
var fifthShip = input_Replace.replace('replaceTemp', 'The Flying Dutchman');
var sixthShip = input_Replace.replace('replaceTemp', 'The Defender');
var seventhShip = input_Replace.replace('replaceTemp', 'Kingdom Revenge');
var eighthShip = input_Replace.replace('replaceTemp', 'The Best');
var ninthShip = input_Replace.replace('replaceTemp', 'The Vengeance');
var tenthShip = input_Replace.replace('replaceTemp', 'The Mean Drunk');
var eleventhShip = input_Replace.replace("replaceTemp", "Neptune's Hammer");
var twelvethShip = input_Replace.replace('replaceTemp', 'The Greatest');

//Storing the results in an variable array called ship by using the push method
var ships = [];
ships.push(firstShip, secondShip, thirdShip, fourthShip, fifthShip, sixthShip, seventhShip, eighthShip, ninthShip, tenthShip, eleventhShip, twelvethShip);



//Empty string to diplay the result
msg = "";


/*****          
    Purpose: For loop to store every ship name in a variable called msg with a list format using html tag
    Parameters: N/A. No parameters but a condition is placed to iterate the loop depending on the number of elements avaialable in the array
    Return: N/A. There is NO return value. However, answers are being stored in a variable called msg
    *****/

//For loop to print every ship name in a list format using html tag
for (i = 0; i < ships.length; i++) {

msg += "<li> <b>Ship </b>" + (i + 1) + "<b>:</b> " + ships[i] + "<br/> <br/> </li>";

}

//display the message on the web
document.getElementById("output").innerHTML = msg;

    }); //end document.ready


