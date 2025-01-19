//  Create element & add it to html
let div = document.createElement('div');
console.log(div);
div.className = 'new-div';
div.id = 'div1';
div.setAttribute('title','new-title');
div.innerHTML = '<p>New Element Created</p>';
let p = div.querySelector('p');
p.style.backgroundColor = 'green';
p.style.color = 'orange';
document.body.appendChild(div);
let addText = document.createTextNode('All element added');
div.appendChild(addText);

//  create element using function
function addLang(lang){
    let li = document.createElement('li');
    console.log(li);
    li.innerText = lang;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
};
addLang('Python');
addLang('C#');

//  Optimized Way
function addOptLang(lang){
    let li = document.createElement('li');
    let addText = document.createTextNode(lang);
    li.appendChild(addText);
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}
addOptLang('Java');
addOptLang('C++');


//  Edit
 let secondLang = document.querySelector('li:nth-child(2)');
 console.log(secondLang);
//  secondLang.innerHTML = 'HTML';
let newli = document.createElement('li');
newli.textContent = 'django';
secondLang.replaceWith(newli);

// Remove
let thirdLang = document.querySelector('li:nth-child(3)');
thirdLang.remove();