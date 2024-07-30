let listIcons = document.querySelectorAll("div img");

if (listIcons[1].getAttribute('alt') == "CSS-icon") {
    listIcons[1].setAttribute('src', "css.png");
}

if (listIcons[2].getAttribute('alt') == "JS-icon") {
    listIcons[2].setAttribute('src', "js.png");
}

let listItems = document.querySelectorAll('li');

listItems[1].classList.add('list-items');
listItems[2].classList.add('list-items');

let h3 = document.querySelectorAll('h3');
h3[0].classList.add('topic-heading');

h3[1].classList.remove('topic-heading');

let btn = document.querySelector('button');
btn.classList.add('btn');

let userResponse = prompt("Write 'yes' if you want to enroll, otherwise 'no'");

if (userResponse == 'no') {
    if (!btn.classList.contains('btn-inactive')) {
        btn.classList.toggle('btn-inactive');
    }
}
else if (userResponse == 'yes') {
    if (!btn.classList.contains('btn-active')) {
        btn.classList.toggle('btn-active');
    }
}