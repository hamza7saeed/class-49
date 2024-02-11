/*
Assignment 1: "Object Properties Exploration"
Explore the properties of an object using the for..in loop.
Create an object with various properties and use the loop to iterate over and log each property
 and its corresponding value.
 */
// let arr = {
//     firstName : "Hamza",
//     secondName: "Saeed",
//     hobbies : ["Sportsman", "Coding", "E-Sport game", "Touriest"],
//     qualifaction: {
//         metric: "computer science",
//         intermediate: "I.com",
//         Bachelor: "BBA",
//         Master: "Msc business management",

//         expertities: [
//             "coding",
//             "typist"
//         ]
//     },
    
// }
// console.log(arr.qualifaction)
// for (let i in arr){
//     console.log(i + ": " +arr[i])
    

// }

/*
Assignment 2: "Array Exploration with forEach"
Practice using the forEach loop with arrays.
Create an array of your choice and use the loop to log each element in the array.
 */
// let arr = [1,2,3,4, "hamza", "saeed"];

// arr.forEach(function(ar){
//     if (typeof ar == "number"){
//         console.log(ar * 2);
//     } else {
//         console.log("u fail");
//     }
// });

// arr.forEach(function(a){
//     console.log(a)
// })

/*
Assignment 3: "Understanding for..in vs for..of"
Highlight the differences between for..in and for..of loops.
Create examples for each and explain when to use one over the other.
 */

//for .. in
// for .. in loop specially used for object to iterate it. 
//Bascially it returns us all the elements of the objects along with its values.
//However, it is also works on array with the helps of array index. 
// let arr = {
//     firstName : "hamza",
//     lastName : "saeed",
//     hobbiles : ["hsdsd", "ywef", "usyd"]
// }
// for (let i in arr){
//     console.log(i + ":  " + arr[i]);
// }
// let val = [1,2,4,6,44,"mango","watermelons"];
// for (let i in val){
//     console.log(val[i]);
// }
// for ..of
// for .. of loop specially works on array because it is only reads values of array nothing else.
// Behind the scene it is works with arr.length. but on the other hand it does not work with object because 
// objects based on properties and its values whereas for..of loop works only with length. If we try to apply it on objects results show us error
// let val = [1,2,4,6,44,"mango","watermelons"];
// for (let i of val){
//     console.log(i)
// }


/*
Assignment 4: "Direct DOM Access with IDs"
Experiment with directly accessing DOM elements using their ID attribute values. 
Create a simple HTML document with multiple elements, assign IDs,
 and showcase direct access using the automatically created global variables.
 */

//  <h1 id = "city">Rawalpindi</h1>
//  console.log(city.innerHTML)


/*
Assignment 5: "DOM Parent Manipulation"
Practice manipulating the parent elements of a given DOM element.
Use methods like replaceChild, removeChild, and insertBefore to modify the 
 structure of a sample HTML document.
 */
// let parEl = document.getElementById("abu");
// let parEl = abu.innerHTML
// let bEl = document.createElement("h2");
// bEl.innerText = "hello bro"
// console.log(parEl.firstChild);
// console.log(parEl.firstElementChild);
// console.log(parEl.firstElementChild.remove());
// let three =document.getElementById("third");

// parEl.replaceChild(bEl,three);
//  parEl.removeChild(three)
// parEl.insertBefore( bEl , three)


/*
Assignment 6: "Child and Sibling Exploration"
Explore the child and sibling methods in the DOM. Create an HTML structure with parent, child, and sibling elements.
 Use methods like nextElementSibling and previousElementSibling to navigate and log results.
 */
// let parEl = document.getElementById("abu");
// let sib = parEl.childNodes[3]
// console.log(sib.nextSibling);
// console.log(sib.nextElementSibling);
// console.log(sib.previousSibling);
// console.log(sib.previousElementSibling);

/*
Assignment 7: "Understanding parent.children vs parent.childNodes"
Compare and contrast parent.children and parent.childNodes. 
Create a scenario where knowing the difference is essential and explain why.
 */
//let parEl = document.getElementById("abu");
//console.log(parEl.children); // it shows us only elements of htmls
//console.log(parEl.childNodes); // it shows us all the elements of htmls along with spaces which it considers as text.


/*
Assignment 8: "Inline Events in Action"
Implement inline events in an HTML document. 
Create a button with an inline event handler and showcase 
its functionality by triggering an alert or other interactive action.
 */
// let body = document.body;
// let but = document.createElement("button");

// but.innerText = "Click here";
// but.setAttribute("onclick", 'alert("hello g")')

// body.appendChild(but)

/*
Assignment 9: "Dynamic Event Handling"
Dynamically add an event handler to an HTML element using the element.event property.
 Create a scenario where the event is triggered by user interaction, such as clicking a button.
 */
// function trigger (){
//     console.log("hahahah")
// }
// let but = document.createElement("button");
// but.innerText = "Click here";
// but.setAttribute("onclick", 'trigger()');
// body.appendChild(but);

/*
Assignment 10: "Dynamic Element Creation and Event Handling"
Create a button dynamically using JavaScript and add it to an existing HTML document. 
Implement event handling for the dynamically created button, and when clicked,
it should perform a specific action,
such as toggling the visibility of another element or changing the content of a paragraph. 
Feel free to adapt the assignments as needed and have fun exploring these JavaScript concepts!
 */

// let parEl = document.getElementById("abu");
// let sec = parEl.firstElementChild.nextElementSibling;

// let name = document.createElement("h3");
// name.innerText = "Hello whay may i help you?";


// let but = document.createElement("button");
// but.innerText = "Click here";
// document.addEventListener('click', function trigger(){
//     console.log(parEl.replaceChild(name, sec));

// });


// document.replaceChild(but, sec);
// body.appendChild(but);
