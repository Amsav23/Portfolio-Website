// Initialize EmailJS SDK with my public key
(function () {
    emailjs.init("V5gqrq9ywQtAIHuqc"); // My public key
    console.log("Initialized EmailJS");
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) { 
    /* This attaches an event listener to the form. It listens for the 'submit' event and runs the 
    specified function when that event occurs */
    event.preventDefault(); /* Prevent form from submitting data to the server and refreshing the page.
    Instead, the form data will be handled through JavaScript */

    // Execute reCAPTCHA
    grecaptcha.ready(function() { /* This ensures that the reCAPTCHA API is fully loaded 
        and ready to use before executing any reCAPTCHA-related code. It’s a good practice to wait until 
        the API is ready to avoid any errors. */
        console.log("reCAPTCHA is ready");

        grecaptcha.execute().then(function(token) { /* This triggers the reCAPTCHA check and returns a token 
            that verifies the user’s interaction. This token needs to be sent with your form submission to 
            validate the reCAPTCHA verification server-side. */
            console.log("Token", token);

            // Add reCAPTCHA token to form data
            var form = document.getElementById("contact-form"); /* Explicitly selects the form by its ID 
            and assigns it to the 'form' variable. */

            // Creates a hidden input field to store the reCAPTCHA token and appends it to the selected form
            var hiddenInput = document.createElement("input");
            hiddenInput.setAttribute("type", "hidden");
            hiddenInput.setAttribute("name", "g-recaptcha-response");
            hiddenInput.setAttribute("value", token);
            form.appendChild(hiddenInput);

        // Send form data via EmailJS
        emailjs.sendForm("contact_service", "contact_form", form)
        /*
        This method 'emailjs.sendForm()' sends the form data to the EmailJS service.
        'contact_service' is the service ID I created.
        'contact_form' is the template ID I created.
        Uses the 'form' variable to send the form data to EmailJS, including the hidden reCAPTCHA token.
        */

            // JS Promise handles asynchronous operations, like sending form data to a server
            .then(() => { // runs if the promise resolves successfully
                console.log("Success!");
            })
            .catch((error) => { // runs if the promise is rejected
                console.log("Failed", error);
            });
        }).catch((error) => {
            console.error("reCAPTCHA error", error);
        });
    });
});