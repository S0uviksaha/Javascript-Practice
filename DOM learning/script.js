//  how to get element and print the value
let heading = document.getElementById('top-heading').className;
console.log(heading);
console.log(document.getElementById('top-heading').getAttribute('class'));

//  how to set any attribute
let newHeading = document.getElementById('top-heading').setAttribute('class', 'heading1');
console.log(newHeading);

//  add css & Dom manupulation
let headingElement = document.getElementById('top-heading');
headingElement.style.backgroundColor ='blue';
headingElement.style.color = 'yellow';
headingElement.style.padding = '10px';
headingElement.style.borderRadius = '5px';
headingElement.style.textAlign = 'center';

headingElement.innerText = "DAY 1";
headingElement.innerHTML = '<h1>Heading on DOM</h1>';


