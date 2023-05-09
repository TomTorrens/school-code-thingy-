/**
* Title: Arrays excercise
* Author: tom
* Date:14th 2nd 21st did this for 3 lessons ps i needed help on this one i was a bit confused 
* Version: 1.1 (fixed title, 7-Nov-22)
* Version: 1.2 (updated comments/instructions; activity name;  8-Nov-22)
* Purpose: Learn how to use Arraus
**/

console.log("Arrays activity")

// Some constants that will be used in this script
const WIDTH = 600;
const HEIGHT = 600;

// Some global variables that will be needed
// Task 2: 
// My word should be cat. Add the "t" to the array called myWord
// (Or insert your own word - adjust the tests in the doc)
// Add another console log to display the new third letter thomas
var ctx
var textColor = "HotPink"
var bgColor = "Beige"
var myWord = ["t","h","o","m","a","s"]   // Array of letters in my word.

var guesses = [] // Task 4a: uncomment this line
console.log("My word:", myWord)
console.log("My word has", myWord.length, "letters")
console.log("First letter",myWord[0])
console.log("Second letter",myWord[1])
console.log("Second letter",myWord[2])
console.log("Second letter",myWord[3])
console.log("Second letter",myWord[4])
console.log("Second letter",myWord[5])
console.log("Second letter",myWord[6])







// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.font = "45px arial"
	ctx.fillStyle = "black"
	ctx.fillText("Guess my word",150,255);
	ctx.fillText("Press any key",150,300);
}

// Set up the keyDown event listener
window.addEventListener('keydown', keyDownFunction)

// This is the function that the eventlistener calls when a key is pressed
function keyDownFunction(keyboardEvent){
	// The keyboard event is passed to the function as an argument
	// The key that was pressed is stored in a local variable named keyDown
	var keyDown = keyboardEvent.key
	// Debug statement, log the key that was pressed
	console.log("You pressed " + keyDown)
	
	// Draw the background
	ctx.fillStyle = bgColor
	ctx.fillRect(0,0,600,600)

	// Display the key that was pressed
	ctx.font = "45px arial"
	ctx.fillStyle = textColor
	ctx.fillText("You pressed "+keyDown, 150,150);
	// Task 3:

	// yeah idk this ones pretty hard i tryed with a few thingys 


	if(keyDown == keyDown == myWord[0] || keyDown == myWord[1] || keyDown == myWord[2] || keyDown == myWord[3]|| keyDown == myWord[4]|| keyDown == myWord[5]|| keyDown == myWord[6]){
		correctLetter(keyDown);
	  } else if(keyDown == myWord[0] || keyDown == myWord[1] || keyDown == myWord[2] || keyDown == myWord[3]|| keyDown == myWord[4]|| keyDown == myWord[5]|| keyDown == myWord[6]) {
		correctLetter(keyDown);
	  } else if(keyDown){
		ctx.fillStyle = "red";
		ctx.fillRect(0,0,600,600)
		ctx.fillStyle = textColor;
		ctx.fillText(keyDown + " is not in my word", 150, 100);
	
	  } else{
		// do something else if no key is pressed
	  }

	//   let count = 0;

	//   if (keyDown) {
	// 	count++
	// 	console.log(count);
	//   }
	// Change the fontsize to be smaller


	ctx.font = "25px arial"
	
	
	var isNewGuess = true // Task 6a: Uncomment this line
    // Task 5:
    // Check to see if a letter has already been guessed
    // Remember counting loops from skill 3
    var numberOfGuesses = (guesses.length) // Change this to be the length of the guesses array 
    var count = 0; // Start counting at zero
    while (count <= numberOfGuesses){ // check all the guesses
    console.log("Checking guess number",count)
        if(keyDown == guesses[count]){ // instead of 0, use the count




            console.log("You have already guessed this letter")
            var alreadyGuessed = ("You have already guessed ") + keyDown 
            ctx.fillText(alreadyGuessed, 120, 50)
            
            isNewGuess = false// Task 6b: Uncomment, set it to false
            
        }
        count++ // This line increments count (add one)
    }
    
	// Task 6c:
	// Only add the new gues to the Guesses array if it is a new guess.
	// Wrap the guesses.push code in an if statement that check the isNewGuess




	// Task 4b:
	// Uncomment the next line and fix it to add the key that was just pressed to the guesses array
	if(isNewGuess){
        guesses.push(keyDown)
    }
    // Log a message that shows the contents of the gusses array (see line 25 for an example)   
    console.log(guesses)
    // Log a message that tells you the length of the array (see line 26 for an example)
    console.log(guesses.length)
    // Display a message on the canvas saying how many guesses
    ctx.fillStyle = "black"
    ctx.fillText("You have guessed:" + guesses, 50, 200)
    // Display a message on the canvas displaying all the guesses
    ctx.fillText("You have guessed " + guesses.length + " times", 50, 250)
}

	


// What to do when the key pressed is in the word.
function correctLetter(key){
	console.log("Yay,",key,"is in my word!")
	ctx.fillStyle = "lightgreen"
	ctx.fillRect(0,300,WIDTH,HEIGHT)
	ctx.fillStyle = "black"
	ctx.fillText("Yay! "+key+" is in my word", 10,470);
}


// What to do when the key pressed is not in the word.
function incorrectLetter(key){
	ctx.fillStyle = "lightcoral"
	ctx.fillRect(0,300,WIDTH,HEIGHT)
	ctx.fillStyle = "black"
	ctx.fillText("Wrong! "+key+" is not in my word", 10,470);
}

// Task 7:
// Change the word. Replace the myWord array with:
///var myWord = ["e", "l", "e", "p", "h", "a", "n", "t"]
// Display a message at the top of the canvas that says how many letters in the word
// Under task3 replace the three if statements with a loop that checks each letter in the myWord array

// Task 8 (optional):
// Use a flag like in task 6 to detect incorrect guesses.
// If a guess is wrong display the incorrect message 