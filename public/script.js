let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let birthYearInput = document.querySelector('#birthYear');
let positionInput = document.querySelector('#position');
let passwordInput = document.querySelector('#password');

if (sessionStorage.getItem('name')) {
  nameInput.value = sessionStorage.getItem('name');
};

if (sessionStorage.getItem('email')) {
  emailInput.value = sessionStorage.getItem('email');
};

if (sessionStorage.getItem('birthYear')) {
  birthYearInput.value = sessionStorage.getItem('birthYear');
};

if (sessionStorage.getItem('position')) {
  positionInput.value = sessionStorage.getItem('position');
};

if (sessionStorage.getItem('password')) {
  passwordInput.value = sessionStorage.getItem('password');
};

nameInput.addEventListener('change', function() {
  sessionStorage.setItem('name', nameInput.value);
});

emailInput.addEventListener('change', function() {
  sessionStorage.setItem('email', emailInput.value);
});

birthYearInput.addEventListener('change', function() {
  sessionStorage.setItem('birthYear', birthYearInput.value);
});

positionInput.addEventListener('change', function() {
  sessionStorage.setItem('position', positionInput.value);
});

passwordInput.addEventListener('change', function() {
  sessionStorage.setItem('password', passwordInput.value);
});
