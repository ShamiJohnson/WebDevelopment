/*
 TITLE: conversion.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 26 September 2018
 PURPOSE: To practtice if statements using javascript.
 LAST MODIFIED ON: 26 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 26 September 2018: created document.ready function (EN)
 */


/***
 Name:
 $(document).ready()
 Purpose:
    The purpose of this function is to check if the user arrived on time or not. if the user arrived on time then they will be congratulated and if they did not then they will be punished. A textContent statement is thrown out if the user does not type the appropraite response.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

$(document).ready(function(){
                  
               //assigns id "question" to the variable "elResponse".
                  var elResponse = document.getElementById('question');
                  
                  //Prompt user to determine if they arrived to port on time (yes/no)
                  var strQuestion = "Did you arrived to port on time? ";
                  
                  //A default answer is stored in the variable "strDefaultAns"
                  var strDefaultAns = "(yes/no)";
                  
                  //Store the result in a variable with the "str" prefix.
                  //Empty string
                  var strResponse = "";
                  var strMessageYES = "Ahoy, you have earned extra doubloons!";
                  var strMessageNO = "Argh, walk the plank!";
            
                  //Store the input in a variable called strResponse
                  strResponse = prompt(strQuestion, strDefaultAns);
                  
                  //converts the input text to upper case
                  strResponseUpper = strResponse.toUpperCase();
                  
                  //if the user arrived on time then run the following code
                  if (strResponseUpper == "YES"){
                  //prints message on the web using textContent
                  elResponse.textContent = strMessageYES;
                  
                  }
                  
                  //if the user did not arrived on time then run the following code
                  else if (strResponseUpper == "NO"){
                  //prints message on the web using textContent
                  elResponse.textContent = strMessageNO;
                  }
                  
                  //if the user response does not match 'strResponseUpper' then run the following code
                  else{
                  //prints message on the web using textContent
                  elResponse.textContent =  " Please type Yes or No ";
                  }

                  
                  }); // end of $(document).ready()
