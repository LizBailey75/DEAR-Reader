// OUR LOGIN BUTTONS DO WORK... I'm not sure what this page is doing...?
$(document).ready(function() {
  console.log("page ready");
});

const loginFormHandler = async (event) => {
  event.preventDefault();
  const password = document.querySelector('#password-login').value.trim();
  const username = document.querySelector('#email-login').value.trim();

console.log("password");
  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //replace login page with homepage
      document.location.replace('homepage');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);




