import {_attributes, _new, _} from "./Utils.js";

const body = document.body;
body.classList.add('scrollLegend')
const Titles = document.querySelectorAll('h1,h2,h3');
const legend =  document.createElement('div');
legend.setAttribute('id', 'legend');
let legendContent ='';

const styleH1 = 'H1';
const styleH2 = 'H2';
const styleH3 = 'H3';

let counter = 0;
let counter2 = 0;
let counter3 = 0;

Titles.forEach(title =>
{
    let number = _new('span');
    number.classList.add('numbering','display');

    if(title.tagName =='H1')
    {
        counter++;
        counter2 = 0;
        title.setAttribute('id',`Title${counter}`);
        legendContent += `<a href="#Title${counter}" Class="${styleH1}">${title.innerHTML}</a>`;
        // number.innerHTML = `${counter}`;
        // title.prepend(number);
    }
    else if(title.tagName == 'H2')
    {
        counter2++;
        counter3 = 0;
        title.setAttribute('id',`Title${counter}.${counter2}`);
        legendContent += `<a href="#Title${counter}.${counter2}" Class="${styleH2}">${counter2}. ${title.innerHTML}</a>`;
        number.innerHTML = `${counter2}`;
        title.prepend(number);
    }
    else
    {
        counter3++;
        title.setAttribute('id',`Title${counter}.${counter2}.${counter3}`);
        legendContent += `<a href="#Title${counter}.${counter2}.${counter3}" Class="${styleH3}">${counter2}.${counter3}. ${title.innerHTML}</a>`;
        number.innerHTML = `${counter2}.${counter3}`;
        title.prepend(number);
    }
})

legend.innerHTML = `<div>${legendContent}</div>`;
body.appendChild(legend);

const menuRight = _new('div');
menuRight.setAttribute('id', 'menuRight')

const editBtn = _new('span');
editBtn.innerHTML = 'edit';
editBtn.classList.add('UI-circle','GI');

let designMode = false;
editBtn.addEventListener('click', ()=>{
    if(designMode)
    {
        document.designMode = 'off';
        designMode = false;
    }
    else
    {
        document.designMode = 'on';
        designMode = true;
    }
})

const numberingBtn = _new('span');
numberingBtn.innerHTML = 'format_list_numbered';
numberingBtn.classList.add('UI-circle','GI');
let numbering = false;

const numbers = _('.numbering');
console.log(numbers)

numberingBtn.addEventListener('click', () =>{
    numbers.forEach(e =>{
        e.classList.toggle('display');
    })
    numberingBtn.classList.toggle('bg-light-accent');
})

menuRight.appendChild(editBtn);
menuRight.appendChild(numberingBtn);
body.appendChild(menuRight);