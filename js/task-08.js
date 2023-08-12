const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("All fields must be filled out");
    return;
  }

  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  console.log(formDataObject);

  form.reset();
}
