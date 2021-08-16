//!!!!!!!!!!!!!!!!!!!Don't forget to figure out how to put the \ symbol into the array without problems.
// Dont forget to make sure that it checks you if you dont select any types



// Grab the button from html and make a variable here in js that we can manipulate.
var generateBtn = document.querySelector("#generate");

// Create arrays for each the different type of characters to be used in the password.
/*
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "'", '"', "<", ",", ">", "/", "?", "|"];
*/

var workingArray = [];

//Declare so variables that will store the responses to our questions of the user.
var wantLower = false;
var wantUpper = false;
var wantNumbers = false;
var wantSpecial = false;
var wantsLength = 1;

var workingPass = "";


// Getting the password length function.
function gettingPasswordLength() {
    var passwordLenth = window.prompt("How long would you like the password to be?");
    if (passwordLenth >= 8 && passwordLenth < 128) {
        wantsLength = passwordLenth;
    }
    else {
        gettingPasswordLength();
    }
    //console.log("Your wantsLength is " + wantsLength.length + "long");
}

//gettingPasswordLength();


function askQuestions() {
    var lowerLetters = window.confirm("Do you want to include lower case letters in your password?");
    if (lowerLetters == true) {
        wantLower = true;
    }


    var upperLetters = window.confirm("Do you want to include upper case letters in your password?");
    if (upperLetters == true) {
        wantUpper = true;
    }


    var numbers = window.confirm("Do you want to use numbers in your password?");
    if (numbers == true) {
        wantNumbers = true;
    }


    var special = window.confirm("Do you want to use special characters in you password?");
    if (special == true) {
        wantSpecial = true;
    }

    gettingPasswordLength();


    console.log("Want lower: " + wantLower + " Want upper: " + wantUpper + " Want numbers: " + wantNumbers + " Want special: " + wantSpecial + " length is: " + wantsLength);

    function addTheLower() {
        if (wantLower === true) {
            workingArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

        }
    }
    function addTheUpper() {
        if (wantUpper === true) {
            workingArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        }
    }
    function addTheNumbers() {
        if (wantNumbers === true) {
            workingArray.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        }
    }
    function addTheSpecial() {
        if (wantSpecial === true) {
            workingArray.push("`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "\'", '\"', "<", ",", ">", "/", "?", "|", "\\");
        }
    }
    addTheLower();
    addTheUpper();
    addTheNumbers();
    addTheSpecial();
    //gettingPasswordLength();

    console.log("Your wants length is " + wantsLength);
    console.log(workingArray);
    console.log("Your workingArray length is " + workingArray.length);

    for (var i = 0; i < wantsLength; i++) {
        workingPass = workingPass + workingArray[Math.floor(Math.random() * workingArray.length)];
    }
    console.log("Your password is " + workingPass);
}








generateBtn.addEventListener("click", askQuestions);











// Get references to the #generate element
// Write password to the #password input
function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = workingPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//console.log(workingArray);
//console.log("Want lower " + wantLower + " Want upper " + wantUpper + " Want numbers " + wantNumbers + " Want special " + wantSpecial + " length is " + wantsLength);
