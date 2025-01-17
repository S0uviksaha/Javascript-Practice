//  how to get element and print the value
let heading = document.getElementById('top-heading').className;
console.log(heading);
console.log(document.getElementById('top-heading').getAttribute('class'));

//  how to set any attribute
let newHeading = document.getElementById('top-heading').setAttribute('class', 'heading1');
console.log(newHeading);



