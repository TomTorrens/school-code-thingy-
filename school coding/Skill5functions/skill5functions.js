/**
* Title: Functions excercise
* Author: Tom
* Date:13th of the 2nd
* Version: 1
* Purpose: Learn how to use functions
**/

console.log("Functions activity")


// Some constants that will be used in this script
const WIDTH = 600;
const HEIGHT = 600;

// Some global variables that will be needed
var ctx
var textColor = "HotPink"
var bgColor = "Beige"

// ctx.fillRect(0, 0, 1200, 1200);
// ctx.fillStyle = "beige";

// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.font = "45px arial";
	ctx.fillStyle = "black";

}

// Remember event handling from skill 2:
// Events: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// All events you could listen for: https://www.w3schools.com/jsref/dom_obj_event.asp
// The format for an event listener is: element.addEventListener(<which event to listen for>, <what to do with the event>);
// We are listening for the 'keydown' event in the HTML window element. When a key on the keyboard is pressed we want to run the keyDownFunction.
// Task 2a: Uncomment the line below
window.addEventListener('keydown', keyDownFunction)

// This is the function that the eventlistener calls when a key is pressed
function keyDownFunction(keyboardEvent){
	// The keyboard event is passed to th function as an argument
	// The key that was pressed is stored in a local variable named keyDown
	var keyDown = keyboardEvent.key
	
	// Task 2b: Use console.log to display a message saying "You just pressed" and the key that was pressed on the same line
	console.log("you just presse "+keyDown+" YAY")

	
	// Task 3: 
	// Use ctx.fillRect() to fill the whole canvas with the background color.
	//			Use the global variable bgColor
	// Use ctx.fillText() to write the message "You pressed " and the key that was pressed on the canvas in the text Color.
	//			Use the global variable textColor
	//			Use the X and Y coordinates 150, 150
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, 1200, 1200);
	ctx.fillStyle = textColor;

	ctx.fillText("You just pressed: " + keyDown, 150, 225);
	

	
	// Task 4: My secret word is "cat"
	// Use a logic statement to detect the letters in the word "cat"
	// If one of these letters is detected use console.log() to log an appropriate message "congratulations *** is in my word"
	// If any other key is pressed use console.log() to log an appropriate message "sorry *** is not in my word :-("
	//			Don't forget to use double equals (==) in the if statements!
	if (keyDown === "c" || keyDown === "a" || keyDown === "t") {
		congratulations(keyDown);
	  } else {
		console.log("No, " + keyDown + " is not in my word.");
		wrong(keyDown);

	  }
	}


	
	function congratulations(keyDown) {
	  console.log("Congratulations, " + keyDown + " is in my word");
	  ctx.fillStyle = "green";
	  ctx.fillRect(0, 300, 1200,600);
	  ctx.fillStyle = "blue";
	  ctx.fillText(keyDown + " is in my word", 50, 50);


	}

	function wrong(keyDown) {
		console.log("Wrong, " + keyDown + " is not in my word");
		ctx.fillStyle = "red";
		ctx.fillRect(0, 300, 1200,600);
		ctx.fillStyle = "blue";
		ctx.fillText(keyDown + " is in my word", 50, 50);
  
  
	  }

	// Task 6:
	// Add graphics.
	// When a correct key is pressed colour the bottom half of the canvas green
	// Find a good green colour from https://www.w3schools.com/colors/colors_names.asp
	// Display the message "Correct, *** is in my word!" on the canvas
	// Because this is in a function you will only need to write it once!
 // This is the end of the congratulations function

// Task 7:
// Create a new function for when an incorrect key is pressed.
// Use this function instead of the console.log under task 4
// This function should colour the botton half of the canvas red
// Find a good red colour from https://www.w3schools.com/colors/colors_names.asp
//			I think LightCoral works well
// It should also give a message saying which key was pressed and that it is not in the word.
