/*
 TITLE: random.js
 AUTHOR: Ehtsham Nisar (EN)
 CREATE DATE: 18 September 2018
 PURPOSE: create a random.js file to write on web page
 LAST MODIFIED ON: 18 September 2018
 LAST MODIFIED BY: Ehtsham Nisar (EN)
 MODIFICATION HISTORY:
 18 September 2018: created functions (EN)
 */



/***
 Name:
    $(document).ready()
 Purpose: The purpose of this function is to creat a Pirate object with specific parameters which can be used to create captain and other crew members. The goal is to create a guesssing game. Captain will generate a random number and so will the crew members. the crew member who gets the number right will get captain's bottle of grog.
 
 Parameters:
        N/A
 Return:
        N/A
 
 ***/
$(document).ready(function(){
                  
                  
                  /***
                   Name:
                   Pirate()
                   Purpose:
                        The purpose of this function is to create a pirate Object with parameters describing the pirate and their guesses in order to their captain's bottle of grog
                   
                   Parameters:
                   rank - this parameter is responsible in displaying the message from captain and his crew regarding their names and ranks and any other neccassarly text needed.
                   
                   favNumber - this is responsible in displaying the random guesses from the captain and his crew
                   
                   id - gets the id value from html and is able to display the result from javaScript
                   
                   Return:
                   N/A
                   
                   ***/

                  function Pirate(rank,favNumber, id){
                  
                  this.strRank = rank;
                  this.intFavNumber = favNumber;
                  this.elOutput = document.getElementById(id);
                  
                 
                  /*** Name: speak()
                   Purpose: This is responsible in displaying all the messeges on the web browser.
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.speak = function(){
                  this.elOutput.innerHTML += "<br>" + this.strRank;//string message is stored in the elOutput and then displayed with the help of innerHTML
                  };
                  
                  /*** Name: captainGuessChallenge()
                   Purpose: Cptain's INITIAL message challenging his crew in a guessing game.
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.captainGuessChallenge = function(){
                  this.strRank = "I, Captain Black Beard, will award my grog to whomever can guess my favorite number between 1-10. Argh! ";
                  };
                  
                  /*** Name: firstMatieGuess()
                   Purpose: this function is responsible in creating a string message for the FIRST crew member. It creates a concatenated string including the guess
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.firstMatieGuess = function(){
                  this.strRank = "Sailor Mast Hugger chooses " + this.intFavNumber.toString() + ". Argh! ";
                  };
                  
                  /*** Name: secondMatieGuess()
                   Purpose: this function is responsible in creating a string message for the SECOND crew member. It creates a concatenated string including the guess
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.secondMatieGuess = function(){
                  this.strRank = "Sailor Jack Sparrow chooses " + this.intFavNumber.toString() + ". Argh! ";
                  };
                  
                  /*** Name: thirdMatieGuess()
                   Purpose: this function is responsible in creating a string message for the THIRD crew member. It creates a concatenated string including the guess
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.thirdMatieGuess = function(){
                  this.strRank = "Sailor John Snow chooses " + this.intFavNumber.toString() + ". Argh! ";
                  };
                  
                  /*** Name: captainGuess()
                   Purpose: this function is responsible in creating a string message for CAPTAIN. It creates a concatenated string including captain's SECRET NUMBER.
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.captainGuess = function(){
                  this.strRank = "My secret number is " + this.intFavNumber.toString() + ". Argh! ";
                  };
                  
                  /*** Name: winnerChallengeFirst()
                   Purpose: this displays a message if the FIRST crew member guesses captain's secret number
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.winnerChallengeFirst = function(){
                  this.strRank = "The Winner is Sailor Mast Hugger. Argh! ";
                  };
                  
                  /*** Name: winnerChallengeSecond()
                   Purpose: this displays a message if the SECOND crew member guesses captain's secret number
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.winnerChallengeSecond = function(){
                  this.strRank = "The Winner is Sailor Jack Sparrow. Argh! ";
                  };
                  
                  /*** Name: winnerChallengeThird()
                   Purpose: this displays a message if the THIRD crew member guesses captain's secret number
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.winnerChallengeThird = function(){
                  this.strRank = "The Winner is Sailor John Snow. Argh! ";
                  };
                  
                  /*** Name: winnerNone()
                   Purpose: this displays a message if NONE of the members are able to guess captain's secret number
                   Parameters:N/A
                   RETURN: N/A    ***/
                  this.winnerNone = function(){
                  this.strRank = "No one could guess the Number. Refresh to try again! ";
                  };//end of Pirate()
                  
                  
                  };// end of $(document).ready()
                  
                  //Random Global variables responsible for creating random numbers unique to the individual crew member.
                  userNumber = 10;
                  //This creates a random number for CAPTAIN and then the value is stored in a variable for comparing and displaying results.
                  captainNumber = Math.floor(Math.random() * userNumber)+1;
                  //This creates a random number for FIRST crew member and then the value is stored in a variable for comparing and displaying results.
                  firstMatieNumber = Math.floor(Math.random() * userNumber)+1;
                  //This creates a random number for SECOND crew member and then the value is stored in a variable for comparing and displaying results.
                  secondMatieNumber = Math.floor(Math.random() * userNumber)+1;
                  //This creates a random number for THIRD crew member and then the value is stored in a variable for comparing and displaying results.
                  thirdMatieNumber = Math.floor(Math.random() * userNumber)+1;
                  
                 
                  /*** Name: captainChallenge
                   Purpose: OBJECT for captain for displaying the Guessing game challenge.
                   Parameters:N/A just strings
                   RETURN: N/A***/
                  var captainChallenge = new Pirate("Captain: ", "" , "captainChallenge");
                  
                  /*** Name: captain
                   Purpose: OBJECT for captain for displaying CAPTAIN'S number.
                   Parameters:N/A just strings and random secret number
                   RETURN: N/A***/
                  var captain = new Pirate("Captain: ", captainNumber , "captain");
                  
                  /*** Name: firstMatie
                   Purpose: OBJECT for firstMatie for displaying the Guessing game message and guess.
                   Parameters:N/A just strings and random guess
                   RETURN: N/A***/
                  var firstMatie = new Pirate("First Matie: ", firstMatieNumber , "firstMatie");
                  
                  /*** Name: secondMatie
                   Purpose: OBJECT for secondMatie for displaying the Guessing game message and guess.
                   Parameters:N/A just strings and random guess
                   RETURN: N/A***/
                  var secondMatie = new Pirate("Second Matie: ", secondMatieNumber , "secondMatie");
                  
                  /*** Name: thirdMatie
                   Purpose: OBJECT for thirdMatie for displaying the Guessing game message and guess.
                   Parameters:N/A just strings and random guess
                   RETURN: N/A***/
                  var thirdMatie = new Pirate("Third Matie: ", thirdMatieNumber , "thirdMatie");
                  
                  /*** Name: winner
                   Purpose: OBJECT for winner for displaying the WINNER.
                   Parameters:N/A just strings and random guess
                   RETURN: N/A***/
                  var winner = new Pirate(" ", thirdMatieNumber , "winner");
                  
                  
                  //calls on the captainChallenge function and lets the captain talk
                  captainChallenge.speak();
                  captainChallenge.captainGuessChallenge();
                  captainChallenge.speak();
                  
                  //calls on the captain function and lets the captain talk
                  captain.speak();
                  captain.captainGuess();
                  captain.speak();
                  
                  //calls on the firstMatie function and lets the firstMatie talk and guess
                  firstMatie.speak();
                  firstMatie.firstMatieGuess();
                  firstMatie.speak();
                  
                  //calls on the secondMatie function and lets the secondMatie talk and guess
                  secondMatie.speak();
                  secondMatie.secondMatieGuess();
                  secondMatie.speak();
                  
                  //calls on the thirdMatie function and lets the thirdMatie talk and guess
                  thirdMatie.speak();
                  thirdMatie.thirdMatieGuess();
                  thirdMatie.speak();
                  
                  
                  //Compares the random guesses between the crew member and captain. IF the guess matches then the program runs. if not then it moves onto the next one.
                  if (captainNumber == firstMatieNumber){
                  
                  winner.speak();
                  winner.winnerChallengeFirst();
                  winner.speak();
                  
                  }
                  
                  //Compares the random guesses between the crew member and captain. IF the guess matches then the program runs. if not then it moves onto the next one.
                  else if (captainNumber == secondMatieNumber){
                  winner.speak();
                  winner.winnerChallengeSecond();
                  winner.speak();
                  }
                  
                  //Compares the random guesses between the crew member and captain. IF the guess matches then the program runs. if not then it moves onto the next one.
                 else if (captainNumber == thirdMatieNumber){
                  winner.speak();
                  winner.winnerChallengeThird();
                  winner.speak();
                  
                  }
                  
                  //IF none of the guesses match then a message is displayed asking the user to try again.
                  else if (captainNumber != thirdMatieNumber){
                  winner.speak();
                  winner.winnerNone();
                  winner.speak();
                  
                  }
                
                  
                  }); // end of $(document).ready()


