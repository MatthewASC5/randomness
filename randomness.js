//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){
    let x = Math.random();
    let y = Math.floor(x*21);
    console.log(y);
}

//randomNumber();

function randomLetter(){
    let x = Math.random();
    let y = Math.floor(x*26);
    console.log(alphabet.charAt(y))


}

//randomLetter()

function randomFood(){
    let x = Math.random();
    let y = Math.floor(x*5)
    console.log(foods[y])
}


//randomFood()

function randomStudent(){
    let x = Math.random();
    let y = Math.floor(x*6)
    console.log(students[y])
}

//randomStudent()

function randomGroup(){
    randomStudent()
    randomStudent()
    randomStudent()
}

//randomGroup()