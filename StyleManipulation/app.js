let listIcons = document.querySelectorAll("div img");

listIcons[1].setAttribute('src', "css.png");
listIcons[2].setAttribute('src', "js.png");

let listItems = document.querySelectorAll('li');

listItems[1].classList.add('list-items');
listItems[2].classList.add('list-items');

let h3 = document.querySelectorAll('h3');
h3[0].classList.add('topic-heading');

h3[1].classList.remove('topic-heading');

let btn = document.querySelector('button');
btn.classList.add('btn');