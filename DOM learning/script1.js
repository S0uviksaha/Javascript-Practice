let week = document.querySelector('.week');
console.log(week);
console.log(week.children);
console.log(week.children[0].innerText);
//  for loop
for (let i = 0; i < week.children.length; i++) {
    console.log(week.children[i].innerText);
}
//  firstchild & firstElementChild
console.log(week.firstChild);
console.log(week.firstElementChild);
//  lastchild & lastElementChild
console.log(week.lastChild);
console.log(week.lastElementChild);

let dayOne = document.querySelector('.day');
console.log(dayOne);

console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log('Nodes: ',week.childNodes);







