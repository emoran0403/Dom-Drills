

/*
3: In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
*/

let myDiv = document.createElement('div');
myDiv.className = "header-container";

/*
4: Create a h1 element, then create a text node with the text "This is an h1". Append the text to the h1 then append the h1 to the div, then append the div to the body.

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
>> there has to be a way to use a for loop to make this happen dynamically
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