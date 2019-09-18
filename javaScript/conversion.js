/*
 TITLE: conversion.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 5 September 2018
 PURPOSE: create a convsersion.js file to write on web page
 LAST MODIFIED ON: 5 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 5 September 2018: created document.ready function (EN)
 */

$(document).ready(function(){
                  
               //assigns id "Name" to the variable "elResponse".
                  var elResponse = document.getElementById('Name');
                  //REQUIREMENT 1: Asks user a question
                  var strQuestion = "What's your pirate name? ";
                  //REQUIREMENT 1: A default answer is stored in the variable "strDefaultAns"
                  var strDefaultAns = "Peg Leg O'Brien";
                  //REQUIREMENT 2: Store the result in a variable with the "str" prefix.
                  //Empty string
                  var strName = "";
                  var strMessage = "Ahoy Captain! How many gold doubloons have you plundered? ";
            
                  strName = prompt(strQuestion, strDefaultAns);
                  elResponse.textContent = strMessage;
                  

                  
                  /* *********************************************************************** */
                  
             
                  
                  var elResponseDoubloon = document.getElementById('Doubloon');
                  
                  //REQUIREMENT 3: Prompt the user for the number of gold doubloons they plundered - also with a default value.
                  var strQuestionDoubloon = "How many gold doubloons have you plundered? ";
                  
                  var strDefaultAnsDoubloon = "17";
                  
                  //REQUIREMENT 4: Store the number id a variable with the "str" prefix.
                  var strDoubloonNumber = "";
                  var numDoubloon = 0;
                  
                  
                  strDoubloonNumber = prompt(strQuestionDoubloon, strDefaultAnsDoubloon);
                  
                  //REQUIREMENT 5: Perform parseInt() on the number of gold doubloons to convert the string to an integer.
                  numDoubloon = parseInt(strDoubloonNumber);
                  
                  
                  //REQUIREMENT 6: Multiply the number of gold doubloons by the worth of a gold doubloon in USD ($287) to determine the profit.
                  //REQUIREMENT 7:Store the calculated profit in a variable.
                  var intTotalDoubloon = numDoubloon * 287;
                  
                  elResponseDoubloon.textContent = "I, " + strName + ", " + "have plundered " + strDoubloonNumber + " gold doubloons for a total profit of $" + intTotalDoubloon + ". Argh!";
                  
                  }); // end of $(document).ready()





