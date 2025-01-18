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

//  use of queryselector
let heading1 = document.querySelector('h2');
console.log(heading1);
let heading2 = document.querySelectorAll('h2');
console.log(heading2);
let myUl = document.querySelector('ul');
console.log(myUl);
let list1 = myUl.querySelector('li');
console.log(list1);
list1.style.backgroundColor = 'Green';

//  nodelist
let para = document.querySelectorAll('p');
console.log(para);
para[0].style.padding = '5px';
para[0].style.backgroundColor = 'Red';
//  for each loop 
let tempList = document.querySelectorAll('li');
console.log(tempList);
tempList.forEach(function(l){
    l.style.color = 'yellow';
    l.style.backgroundColor = 'black';
});

//  Html Collection
let classItems = document.getElementsByClassName('list-item');
console.log(classItems);
//  convert Html Collection into Array for using Loop
let convertedArray = Array.from(classItems);
console.log(convertedArray);
for(let i=0; i<convertedArray.length; i++){
    convertedArray[i].style.color = 'orange';
}