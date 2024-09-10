let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let ip = document.querySelector('input');
    AddEntry(ip.value);

    form.reset();
});

let ol = document.createElement('ol');
document.querySelector('body').appendChild(ol);

function AddEntry(entry) {
    entry = entry.trim();

    if (entry == "")
        return;

    let li = document.createElement('li');
    li.innerText = entry;

    ol.appendChild(li);
}