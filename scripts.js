

/*
3: In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
*/

let myDiv = document.createElement('div');
myDiv.className = "header-container";

/*
4: Create a h1 element, then create a text node with the text "This is an h1". Append the text to the h1 then append the h1 to the div, then append the div to the body.
*/

let myH1 = document.createElement('h1'); //Create a h1 element
let myH1Text = document.createTextNode('This is an h1'); //then create a text node with the text "This is an h1"
myH1.appendChild(myH1Text); //Append the text to the h1
myDiv.appendChild(myH1); //then append the h1 to the div
document.body.appendChild(myDiv); //then append the div to the body. 

/* 
>> I learned that i need to have 'document.' before body so js 
will recognize body as being from the document, and not a variable i've created in js
*/
