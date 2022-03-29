const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { currentTarget } = event;
  const { email, password } = currentTarget.elements;

  let valid = true;

  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены.');
    email.value = '';
    password.value = '';
    valid = false;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  form.reset();
}
