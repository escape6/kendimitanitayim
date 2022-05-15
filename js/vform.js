let fnameValid = true;
let lnameValid = true;
let emailValid = true;
let mobileValid = true;
let messageValid = true;

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

function isFnameValid(fname) {
    const re = /^[a-zA-Z ]*$/;
    return re.test(fname);
}
const checkFname = () => {
    let fname = document.getElementById('fname').value.trim();
    const min = 3,
        max = 25;
    if (!isRequired(fname)) {
        document.getElementById('fname-er').innerHTML = 'Ad alanı boş bırakılamaz.';
        fnameValid = false;
    } else if (!isBetween(fname.length, min, max)) {
        document.getElementById('fname-er').innerHTML = `Ad ${min} ila ${max} karakter arasında olmalıdır.`;
        fnameValid = false;
    } else if (!isFnameValid(fname)) {
        document.getElementById('fname-er').innerHTML = 'Ad geçerli değil.';
        fnameValid = false;
    } else {
        document.getElementById('fname-er').innerHTML = '&#10003';
        fnameValid = true;
    }
    let control = document.getElementById('fname');
    if (!fnameValid) {
        control.style.borderColor = 'red';
    } else {
        control.style.borderColor = 'green';
    }
    return fnameValid;
}

function isLnameValid(lname) {
    const re = /^[a-zA-Z ]*$/;
    return re.test(lname);
}
const checkLname = () => {
    let lname = document.getElementById('lname').value.trim();
    const min = 3,
        max = 25;
    if (!isRequired(lname)) {
        document.getElementById('lname-er').innerHTML = 'Soyadı boş bırakılamaz.';
        lnameValid = false;
    } else if (!isBetween(lname.length, min, max)) {
        document.getElementById('lname-er').innerHTML = `Soyadı ${min} ila ${max} karakter arasında olmalıdır.`;
        lnameValid = false;
    } else if (!isLnameValid(lname)) {
        document.getElementById('lname-er').innerHTML = 'Soyadı geçerli değil.';
        lnameValid = false;
    } else {
        document.getElementById('lname-er').innerHTML = '&#10003';
        lnameValid = true;
    }
    let control = document.getElementById('lname');
    if (!lnameValid) {
        control.style.borderColor = 'red';
    } else {
        control.style.borderColor = 'green';
    }
    return lnameValid;
}

function isEmailValid(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}
const checkEmail = () => {
    let email = document.getElementById('email').value.trim();
    if (!isRequired(email)) {
        document.getElementById('email-er').innerHTML = 'E-posta boş bırakılamaz.';
        emailValid = false;
    } else if (!isEmailValid(email)) {
        document.getElementById('email-er').innerHTML = 'E-posta geçerli değil.';
        emailValid = false;
    } else {
        document.getElementById('email-er').innerHTML = '&#10003';
        emailValid = true;
    }
    let control = document.getElementById('email');
    if (!emailValid) {
        control.style.borderColor = 'red';
    } else {
        control.style.borderColor = 'green';
    }
    return emailValid;
}

const isMobileValid = (mobile) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(mobile);
}
const checkMobile = () => {
    let mobile = document.getElementById('mobile').value.trim();
    if (!isRequired(mobile)) {
        document.getElementById('mobile-er').innerHTML = 'Cep telefonu numarası boş bırakılamaz.';
        mobileValid = false;
    } else if (!isMobileValid(mobile)) {
        document.getElementById('mobile-er').innerHTML = 'Cep telefonu numarası geçerli değil.';
        mobileValid = false;
    } else {
        document.getElementById('mobile-er').innerHTML = '&#10003';
        mobileValid = true;
    }
    let control = document.getElementById('mobile');
    if (!mobileValid) {
        control.style.borderColor = 'red';
    } else {
        control.style.borderColor = 'green';
    }
    return mobileValid;
}

const checkMessage = () => {
    let message = document.getElementById('message').value.trim();
    const min = 25,
        max = 500;
    if (!isRequired(message)) {
        document.getElementById('message-er').innerHTML = 'Mesaj boş olamaz.';
        messageValid = false;
    } else if (!isBetween(message.length, min, max)) {
        document.getElementById('message-er').innerHTML = `Mesaj ${min} ila ${max} karakter arasında olmalıdır.`;
        messageValid = false;
    } else {
        document.getElementById('message-er').innerHTML = '&#10003';
        messageValid = true;
    }
    let control = document.getElementById('message');
    if (!messageValid) {
        control.style.borderColor = 'red';
    } else {
        control.style.borderColor = 'green';
    }
    return messageValid;
}

const form = document.getElementById('contact');
document.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    checkFname();
    checkLname();
    checkEmail();
    checkMobile();
    checkMessage();

    const curImg = document.getElementById("myimg");

    let contactValid = checkFname() && checkLname() && checkEmail() && checkMobile() && checkMessage();
    // submit to the server if the form is valid
    if (contactValid) {
        document.getElementById('contact-er').innerHTML = '&#10003';
        curImg.src = "./images/abdp.png";

        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;
        var message = document.getElementById('message').value;

        const d = new Date();
        let text = 'Alındı ' + d.toLocaleString();
        window.sessionStorage.setItem('now', text);
        window.sessionStorage.setItem('fname', fname);
        window.sessionStorage.setItem('lname', lname);
        window.sessionStorage.setItem('email', email);
        window.sessionStorage.setItem('mobile', mobile);
        window.sessionStorage.setItem('message', message);
        clearForm();
        window.open('mesajacevap.html', '_blank');

    } else {
        document.getElementById('contact-er').innerHTML = 'Mesaj iletişim verileri kabul edilmiyor!';
        curImg.src = "./images/abdg.png";
        setTimeout(function () {
            curImg.src = "./images/abdp.png";
        }, 9000);
    }
});

function clearForm() {
    document.getElementById("fname-er").innerHTML = '';
    document.getElementById("lname-er").innerHTML = '';
    document.getElementById("email-er").innerHTML = '';
    document.getElementById("mobile-er").innerHTML = '';
    document.getElementById("message-er").innerHTML = '';
    document.getElementById("contact-er").innerHTML = '';
    document.getElementById("fname").style.borderColor = '#ced4da';
    document.getElementById("lname").style.borderColor = '#ced4da';
    document.getElementById("email").style.borderColor = '#ced4da';
    document.getElementById("mobile").style.borderColor = '#ced4da';
    document.getElementById("message").style.borderColor = '#ced4da';
    document.getElementById("contact").reset();
}

document.addEventListener('reset', function (e) {
    clearForm();
});

form.addEventListener(input, debounce(function (e) {
    switch (e.target.id) {
        case 'fname':
            checkFname();
            break;
        case 'lname':
            checkLname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'mobile':
            checkMobile();
            break;
        case 'message':
            checkMessage();
            break;
        case 'reset':
            clearForm();
            break;
    }
}));