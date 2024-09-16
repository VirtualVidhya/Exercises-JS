let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    clearPage();
    CheckEnrollmentEligibility();

    form.reset();
});

let courseStatus = document.createElement('p');
let reason = document.createElement('p');

function CheckEnrollmentEligibility() {
    let name = document.querySelector('input[name="name"]');
    let age = document.querySelector('input[name="age"]');
    
    name.value = name.value.trim();

    if (name.value == "" || name.value == null) {
        alert('Please enter name properly');
        return;
    }

    if (age.value <= 0) {
        alert('Please enter proper age value');
        return;
    }

    let compCheckbox = document.querySelector('input[name="computer"]');
    let internetCheckbox = document.querySelector('input[name="internet"]');

    let body = document.querySelector('body');
    body.appendChild(courseStatus);

    if (age.value > 15 && compCheckbox.checked && internetCheckbox.checked) {
        courseStatus.innerHTML = `<b>Congratulations ${name.value}! You are eligible for the course enrollment.</b>`;
        courseStatus.style.color = "green";
        return;
    }
    else {
        courseStatus.innerHTML = `<b>Sorry ${name.value}! You are not eligible for the course enrollment.</b>`;
        courseStatus.style.color = "red";
    }

    if (age.value <= 15) {
        reason.innerText = `Because you're still quite young to learn this.`;
    }
    else if (!compCheckbox.checked) {
        reason.innerText = `Because you can't operate a Computer, which is mandatory for this course.`;
    }
    else if (!internetCheckbox.checked) {
        reason.innerText = `Because you aren't quite familiar with the Internet, which is mandatory for this course.`;
    }

    body.appendChild(reason);
}

function clearPage() {
    courseStatus.remove();
    reason.remove();
}