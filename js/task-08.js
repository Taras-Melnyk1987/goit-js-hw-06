const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const formEl = e.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === "" || password === "") {
    alert("Все поля формы должны быть заполнены!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}
