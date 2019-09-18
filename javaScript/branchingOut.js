/*
 TITLE: branchingOut.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 26 September 2018
 PURPOSE: create a branchingOut.js file to write on web page
 LAST MODIFIED ON: 26 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 26 September 2018: created document.ready function (EN)
 */


/***
 Name:
 $(document).ready()
 Purpose:
    The purpose of this function is to provide the user with appropriate directions based on the information the user provides. this function uses if/else and switch/case.
 Parameters:
    N/A
 Return:
    N/A
 
 ***/
$(document).ready(function(){
                  
                
                  //Prompt user for their loctation and where they would like to go
                  var QCurrentLatitude = "what is your current Lattitude? ";
                  var QDestinationLatitude = "what is your Destination Lattitude? ";
                  var QCurrentLongitude = "what is your Current Longitude? ";
                  var QDestinationLongitude = "what is your Destination Longitude? ";
                  
                  
                  //A default answers is stored in the variables
                  var defaultCurrentLatitude = "0";
                  var defaultDestinationLatitude = "0";
                  var defaultCurrentLongitude = "0";
                  var defaultDestinationLongitude = "0";
                  
                  
                
                  //Empty string for user input
                  var strCurrentLatitude = "";
                  var strDestinationLatitude = "";
                  var strCurrentLongitude = "";
                  var strDestinationLongitude = "";
                  
                  
                  //Storing user's input as a string
                  strCurrentLatitude = prompt(QCurrentLatitude, defaultCurrentLatitude);
                  strDestinationLatitude = prompt(QDestinationLatitude, defaultDestinationLatitude);
                  strCurrentLongitude = prompt(QCurrentLongitude, defaultCurrentLongitude);
                  strDestinationLongitude = prompt(QDestinationLongitude, defaultDestinationLongitude);
                  
                  
                  //Converts strings to int
                  intCurrentLatitude = parseInt(strCurrentLatitude);
                  intDestinationLatitude = parseInt(strDestinationLatitude);
                  intCurrentLongitude = parseInt(strCurrentLongitude);
                  intDestinationLongitude = parseInt(strDestinationLongitude);
                  
                  
                  //assigns id to variable. will be able to print results on the web this way
                  var elEcho = document.getElementById('echo');
                  var el_ifElse = document.getElementById('ifElse');
                  var elcaseSwitch = document.getElementById('caseSwitch');
                  
                  
                  //printing the user's response
                  elEcho.innerHTML = "Current Latitude: " + intCurrentLatitude + "<br> Destination Latitude: " + intDestinationLatitude + "<br>Current Longitude: " + intCurrentLongitude + "<br>Destination Longitude: " + intDestinationLongitude ;
         
            
                 
                  
                  
                  /************* if else ****************/
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run.  The code will print the result on the web.
                  if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude){
                  el_ifElse.textContent = "if/else: Head North East";
                  }
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run.  The code will print the result on the web.
                  else if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude){
                  el_ifElse.textContent = "if/else: Head North West";
                  }
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run.  The code will print the result on the web.
                  else if(intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude){
                  el_ifElse.textContent = "if/else: Head South West";
                  }
                  
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run.  The code will print the result on the web.
                  else if(intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude){
                  el_ifElse.textContent = "if/else: Head South East";
                  }
                  
                  //if the user input does not match anything else then the following message will be displayed.
                  else {
                  el_ifElse.textContent = "if/else: Land Ho!";
                  
                  }
                  

                  switch(true){
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run.  The code will print the result on the web.
                  case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
                  //print direction
                  elcaseSwitch.textContent = "Case/Switch: Head North East";
                  break;
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run. The code will print the result on the web.
                  case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
                  //print direction
                  elcaseSwitch.textContent = "Case/Switch: Head North West";
                  break;
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run. The code will print the result on the web.
                  case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
                  //print direction
                  elcaseSwitch.textContent = "Case/Switch: Head South West";
                  break;
                  
                  //checks the condnition by comparing the user's input. if the user input is true then the code will run. The code will print the result on the web.
                  case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
                  //print direction
                  elcaseSwitch.textContent = "Case/Switch: Head South East";
                  break;
                  
                  default:
                   //print the default statement
                  elcaseSwitch.textContent = "Case/Switch: Land Ho!";
                  
                  }
                  
                  
                  
                  }); // end of $(document).ready()





