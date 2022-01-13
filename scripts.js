

/*
3: In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
*/

let myDiv = document.createElement('div');
myDiv.className = "header-container";

/*
4: Create a h1 element then create a text node with the text "This is an h1" Append the text to the h1  then append the h1 to the div,  then append the div to the body.

>> I learned that i need to have 'document.' before body so js 
will recognize body as being from the document, and not a variable i've created in js
*/

let myH1 = document.createElement('h1'); //Create an h1 element
let myH1Text = document.createTextNode('This is an h1'); //then create a text node with the text "This is an h1"
myH1.appendChild(myH1Text); //Append the text to the h1
myDiv.appendChild(myH1); //then append the h1 to the div
document.body.appendChild(myDiv); //then append the div to the body. 

/*
5: Create a h2 element, give it the text "This is an h2" and append it to the same div the h1 one is
*/

let myH2 = document.createElement('h2'); //Create an h2 element
let myH2Text = document.createTextNode('This is an h2'); //then create a text node with the text "This is an h2"
myH2.appendChild(myH2Text); //Append the text to the h2
myDiv.appendChild(myH2); //then append the h2 to the div

/*
6: Repeat the following task for h3's through h6's.
>> there has to be a way to use a for loop to make this happen dynamically.  the type of heading could be the iterating variable.  
does h${i} work to create multiple headers?
*/

let myH3 = document.createElement('h3');
let myH3Text = document.createTextNode('This is an h3');
myH3.appendChild(myH3Text);
myDiv.appendChild(myH3);

let myH4 = document.createElement('h4');
let myH4Text = document.createTextNode('This is an h4');
myH4.appendChild(myH4Text);
myDiv.appendChild(myH4);

let myH5 = document.createElement('h5');
let myH5Text = document.createTextNode('This is an h5');
myH5.appendChild(myH5Text);
myDiv.appendChild(myH5);

let myH6 = document.createElement('h6');
let myH6Text = document.createTextNode('This is an h6');
myH6.appendChild(myH6Text);
myDiv.appendChild(myH6);

/*
7: Give each heading element a class name that represents what type of heading element it is. If it is an h1, the class should be "h1".
>> this could probably go in that for loop from step 6
*/

myH1.className = "h1"; //sets the class name of each header
myH2.className = "h2";
myH3.className = "h3";
myH4.className = "h4";
myH5.className = "h5";
myH6.className = "h6";

/*
9: Create and array of 8 colors,  add an event listener that changes the color of a heading to a random color from the array when it is double clicked.
>> I wasnt sure how to attach an event listener to the div parent of the headers that would change the color when double-clicked
*/

let pallette = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Blue", "BlueViolet", "Crimson"]; // creates an array with HTML named colors


myH1.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9); //gives a random number between 0-8 inclusive
    myH1.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

myH2.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9);
    myH2.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

myH3.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9);
    myH3.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

myH4.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9);
    myH4.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

myH5.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9);
    myH5.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

myH6.addEventListener("dblclick", function () {
    let randNum = Math.floor(Math.random() * 9);
    myH6.style.color = pallette[randNum];
    //console.log("you changed the color to " + pallette[randNum]);
});

/*
9: Add a button in the index.html, give this button text that says "Click to add new list item", give the button a class name of your choosing.
*/



let myButton = document.createElement('button'); // Adds a button in the index.html
myButton.innerHTML = "Click to add new list item";  //give this button text that says "Click to add new list item"
myButton.type = "button"; //give the button a class name of your choosing.

/*
12: Create an event listener that calls the new list item function every time the button is clicked.
>>umm, nope im just going to add on click instead
*/

myButton.onclick = listAdder //sets the onclick action to run the listAdder function 
/*
>> i had myButton.onclick = listAdder() written initially, which apparently calls the funcion when the function is assigned to the button
*/
myDiv.appendChild(myButton); // adds button to the div.  it will appead after the headers above since it is located below that those in the code.

/*
11: In the scripts.js file, write a function that inserts a list item, have the first item say "This is list item 1" and any subsequent list item should have the number incremented by 1.
*/



let myList = document.createElement('ul'); //creates an empty list
myDiv.appendChild(myList); //appends the empty list to the div
let n = 1 // number for the list item

function liColor() {
    let randNum = Math.floor(Math.random() * 9);
    myLi.style.color = pallette[randNum];

}

/*
13: Using the same random color function created above, apply an event listener that when a list item is clicked once, it changes the color of the font to one fo the 8 random colors.
*/

/*
14: Create a function that if a list item is double clicked it removes the list item from the DOM.
*/

function listAdder() { //creates the list adder function
    var myLi = document.createElement('li');  // creates a list item
    myLi.innerHTML = `This is list item ${n}`;  // sets the text on the list item to be "This is list Item n, where n starts at 1 and increases on each button press" >>yay template literals!
    myList.appendChild(myLi);  // appends the list item to the my List
    myLi.addEventListener("click", function () { //this adds an event listener to each newly created li, and calls the anonymous function to change the text color when the li is clicked
        let randNum = Math.floor(Math.random() * 9);
        myLi.style.color = pallette[randNum];
    });
    myLi.addEventListener("dblclick", function () { //this adds an event listener to each newly created li, and calls the anonymous function to remove it from the DOM when it is double clicked
        //"hey siri, how do i abort children nodes in javascript?"
        // myLi.style.display = "none";>> is for losers
        console.log(`%c '${this.innerHTML}' has been removed 😉`, "font-weight: bold; font-size: 8em;"); //logs which li has been deleted from the DOM
        this.remove();
    });
    myLi.setAttribute("id", n); // sets the attribute to the current n
    n++; // increments n by 1
    //console.log("button has been clicked!");

}