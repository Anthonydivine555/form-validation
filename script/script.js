const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ⛔ stop form submission

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const phoneNumber = document.getElementById("phone-number").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessages = document.querySelectorAll(".error.message");
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const successMessage = document.querySelector(".submitted-success");
  



  // regex patterns
  const nameRegex = /^[A-Za-z]{2,}$/;
  const phoneRegex = /^(0\d{10}|\+234\d{10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


  let isValid = true;

  if (!nameRegex.test(firstName)) {
    errorMessages[0].textContent = "Invalid first name";
    isValid = false;
  }

  if (!nameRegex.test(lastName)) {
    errorMessages[1].textContent = "Invalid last name";
    isValid = false;
  }

  if (!phoneRegex.test(phoneNumber)) {
    errorMessages[2].textContent = "Invalid phone number";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    errorMessages[3].textContent = "Invalid email";
    console.log('empty')
    isValid = false;
  }

  if (!passwordRegex.test(password)) {
    errorMessages[5].textContent = "Invalid password";
    isValid = false;
  }

  if (password !== confirmPassword) {
    errorMessages[6].textContent = "Passwords do not match";
    isValid = false;
  }

  if (!selectedGender) {
    errorMessages[4].textContent = "Please select a gender";
    isValid = false;
  }

  if (isValid) {
    successMessage.style.top = '10px'

    setTimeout(() => {
      successMessage.style.top = '-100px'
    }, 3000);
    form.reset();
    }

    errorMessages.forEach(message => {
    if (message) {
      setTimeout(() => {
        message.textContent= ''
      }, 4000)
    }
  });
});


document.querySelectorAll(".ti-eye").forEach(eyeIcon => {
   eyeIcon.addEventListener("click", function () {
     const input = this.previousElementSibling;
     togglePasswordVisibility(input);
   });
 });
  function togglePasswordVisibility(input) {
    if (input.type === "password") {
      input.type = "text"; // show password

      setTimeout(() => {
        input.type = "password"; // hide after delay
      }, 1000);
    } else {
      input.type = "password"; // just hide if already shown
    }
  }
