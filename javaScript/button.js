/*
 TITLE: button.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 24 October 2018
 PURPOSE: create a button.js file to write on web page
 LAST MODIFIED ON: 24 October 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 24 October 2018: created button (EN)
 */


/***
 Name:
    $(document).ready(function()
 Purpose:
    The purpose of this function is to create variales and give those variables values. Two empty strings are created and then given values and a number variable is given the value of 5 as described in the assignment details. IDs and other feilds are linked together in the right order to parse the information correctly. <-- All of this have to be hidden in buttons until nthe user clicks the button
 Parameters:
    N/A
 Return:
    N/A
 
 ***/

$(document).ready(function(){

  /*       EVENT HANDLERS             */
                  
                   // Call the function at least five times.
                  
                  //Creating and Storing Captain's Message
                  var strMessage = "";
                  var feet ="";
                  feet = " feet";
                  var strMessage = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var number = 1;
                

//first Function call with unique parameters
                  /***
                   Purpose: if the button is clicked then run the following code to assign values 
                   Parameters: N/A. Parameters are passed into the clickedButton() function.
                   firstHandler- this is used to output the result in a <p> element 
                   strMessage- this gets the string message
                   number- this gets the number value 
                   feet- gets the feet value
                   Return:
                   N/A
                   ***/
btnHandler.onclick = function(){

    btnHandler.onclick = clickedButton("firstHandler", strMessage, number, feet); //information is passed in it//information is passed in it
}

//Creating and Storing Captain's Message
                  var strMessageSecond = "";
                  var feetSecond ="";
                  feetSecond = " feet";
                  strMessageSecond = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberSecond = 2;
                  //Second Function call with unique parameters
                  /***
                   Purpose: if the button is clicked then run the following code to assign values 
                   Parameters: N/A. Parameters are passed into the clickedButton() function.
                   secondHandler- this is used to output the result in a <p> element 
                   strMessageSecond- this gets the string message
                   NumberSecond- this gets the number value 
                   feetSecond- gets the feet value
                   Return:
                   N/A
                   ***/
btnHandler_TWO.onclick = function(){

    btnHandler.onclick = clickedButton("secondHandler", strMessageSecond, NumberSecond, feetSecond); //information is passed in it
}



 /*       EVENT LISTNERS           */

   var strMessageThird = "";
                  var feetThird ="";
                  feetThird = " feet";
                  strMessageThird = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberThird = 3;


  //Third Function call with unique parameters
                  /***
                   Purpose: if the button is clicked then run the following code to assign values 

                   Parameters: N/A. Parameters are passed into the clickedButton() function.
                   firstListner- this is used to output the result in a <p> element 
                   strMessageThird- this gets the string message
                   NumberThird- this gets the number value 
                   feetThird- gets the feet value

                   Some other values has been passed in this functions as well. These values belong to addEventListener().
                   click- fires up if the user clicks 
                   btnListener- holds the complete string 
                   false- Bolean Value is passed

                   Return:
                   N/A
                   ***/

btnListener.onclick = function(){
  //Event Listener
  btnListener.addEventListener("click", btnListener, false);

    btnListener.onclick = clickedButton("firstListner", strMessageThird, NumberThird, feetThird); //information is passed in it
}



//Creating and Storing Captain's Message
                  var strMessageFourth = "";
                  var feetFourth ="";
                  feetFourth = " feet";
                  strMessageFourth = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberFourth = 4;

  //Fourth Function call with unique parameters
                  /***
                   Purpose: if the button is clicked then run the following code to assign values

                   Parameters: N/A. Parameters are passed into the clickedButton() function.
                   secondListner- this is used to output the result in a <p> element 
                   strMessageFourth- this gets the string message
                   NumberFourth- this gets the number value 
                   feetFourth- gets the feet value

                   Some other values has been passed in this functions as well. These values belong to addEventListener().
                   click- fires up if the user clicks 
                   btnListener_TWO- holds the complete string 
                   false- Bolean Value is passed

                   Return:
                   N/A
                   ***/
btnListener_TWO.onclick = function(){
  //Event Listener
  btnListener_TWO.addEventListener("click", btnListener_TWO, false);

    btnListener_TWO.onclick = clickedButton("secondListner", strMessageFourth, NumberFourth, feetFourth); //information is passed in it
}


 /*       MULTI-FUNCTIONAL EVENT LISTNERS            */



 var strMessageFifth = "";
                  var feetFifth ="";
                  feetFifth = " feet";
                  strMessageFifth = "The quartermaster steers the ship in route to intercept the enemy, passing within a mere ";
                  var NumberFifth = 5;


  //Fifth Function call with unique parameters. it is called 2 times in this function
                  /***
                   Purpose: if the button is clicked then run the following code to assign values 
                   Parameters:                    
                   click- fires up if the user clicks 

                   Two functions has been passed as parameters, firstClick() and notAnotherButtonClick()

                   firstClick()- This function holds a completed string for btnMultiListener
                    notAnotherButtonClick()- This function holds a completed string for btnMultiListener

                   false- Bolean Value is passed

                   Return:
                   N/A
                   ***/
  //Multi-Function Event Listener
  btnMultiListener.addEventListener("click", function() {
    firstClick();
    notAnotherButtonClick();
  }, 
  false);


                  /***
                   Purpose: to hold the completed string for btnMultiListener
                   Parameters:  N/A. However they are passed in the clickedButton() function.                   
                   multiListner-this is used to output the result in a <p> element 
                   strMessageFifth -this gets the string message
                   NumberFifth-this gets the number value 
                   feetFifth- gets the feet value
                   Return:
                   N/A
                   ***/

function firstClick(){
    btnMultiListener = clickedButton("multiListner", strMessageFifth, NumberFifth, feetFifth); //information is passed in it
}
  /***
                   Purpose: to hold the completed string for btnMultiListener
                   Parameters:  N/A. However they are passed in the clickedButton() function.                   
                   multiListnerTWO-this is used to output the result in a <p> element 
                   strMessageFifth -this gets the string message
                   NumberFifth-this gets the number value 
                   feetFifth- gets the feet value
                   Return:
                   N/A
                   ***/
function notAnotherButtonClick(){
   btnMultiListener = clickedButton("multiListnerTWO", strMessageFifth, NumberFifth, feetFifth); //information is passed in it
}
                  }); // end of $(document).ready()

 /***
                   Purpose: to create a function which can be used repetetively in order to display ordered string on the screen. 

                   Parameters:                 
                   strID-this is used to link several different Ids so the result can be output on the screeen 
                   strMsg - this is used to link several different Strings so the result can be output on the screeen in a ordered  way 
                   num- this is used to link several different num so the result can be output on the screeen in a ordered  way 
                   ft- this is used to link several different ft so the result can be output on the screeen in a ordered  way 

                   Return:
                   N/A
                   ***/

function clickedButton(strID, strMsg, num, ft){ 
    var btnHandler = document.getElementById(strID); 
        btnHandler.textContent = strMsg + num + ft;
}


                 























