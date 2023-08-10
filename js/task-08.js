const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (!formData.get("email") || !formData.get("password")) {
    alert("All fields must be filled out");
    return;
  }

  formData.forEach((value, name) => {
    console.log(name, value);
  });

  form.reset();
}