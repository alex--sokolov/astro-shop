// Define form element
const authForm = document.getElementById("kt_login_form");

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validator = FormValidation.formValidation(authForm, {
  fields: {
    login: {
      validators: {
        notEmpty: {
          message: "Login is required",
        },
        stringLength: {
          min: 3,
          message: "Password is too short",
        },
      },
    },
    email: {
      validators: {
        notEmpty: {
          message: "Email is required",
        },
        regexp: {
          regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          message: "Not a valid email!!!",
        },
      },
    },
    password: {
      validators: {
        notEmpty: {
          message: "Password is required",
        },
        stringLength: {
          min: 6,
          message: "Password is too short",
        },
      },
    },
  },

  plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap: new FormValidation.plugins.Bootstrap5({
      rowSelector: ".fv-row",
      eleInvalidClass: "",
      eleValidClass: "",
    }),
  },
});

// Submit button handler
const submitButton = document.getElementById("kt_btn_form_submit");
console.log("here");
submitButton.addEventListener("click", function (e) {
  // Prevent default button action
  e.preventDefault();

  // Validate form before submit
  if (validator) {
    validator.validate().then(async function (status) {
      console.log("validated!");

      if (status == "Valid") {
        console.log("status is valid!");

        // Show loading indication
        submitButton.setAttribute("data-kt-indicator", "on");

        // Disable button to avoid multiple click
        submitButton.disabled = true;

        const login = authForm.querySelector('[name="login"]').value;
        const email = authForm.querySelector('[name="email"]').value;
        const password = authForm.querySelector('[name="password"]').value;

        const data = await registerNewUser(login, email, password);
        console.log("Received data: ", data);
        console.log("Received data: ", data.jwt);
        if (data.jwt) {
          console.log("data is good", data.jwt);
          // save jwt to localStorage

          setCookie("astro-shop-token", data.jwt, 30);

          // show success message
          // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/

          // Remove loading indication
          submitButton.removeAttribute("data-kt-indicator");

          // Show popup confirmation
          Swal.fire({
            text: "Form has been successfully submitted!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              // redirect to main page
              setTimeout(() => {
                window.location = "/";
              }, 1000);
            }
          });
        } else {
          console.log(
            "data is bad",
            data.error.message,
            "(",
            data.error.status,
            ")"
          );
          // Remove loading indication
          submitButton.removeAttribute("data-kt-indicator");

          // Enable button
          submitButton.disabled = false;

          // Show popup confirmation
          Swal.fire({
            text: `${data.error.message}(${data.error.status})`,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        }
      }
    });
  }
});
