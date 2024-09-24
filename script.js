// Initialize EmailJS
(function() {
    emailjs.init('kgKwvTqUKVEEFh0Lt');
  })();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting immediately
  
    // Get the reCAPTCHA token
    const recaptchaResponse = grecaptcha.getResponse();
  
    if (recaptchaResponse.length === 0) {
        // If the user hasn't completed the reCAPTCHA
        alert('Please complete the reCAPTCHA.');
    } else {
        // If reCAPTCHA is completed, proceed to send form data
        emailjs.send('contact_service', 'contact_form', {
        // My form data
        name: document.querySelector('[name="user_name"]').value,
        email: document.querySelector('[name="user_email"]').value,
        message: document.querySelector('[name="message"]').value,
        'g-recaptcha-response': recaptchaResponse // Make sure the token is named exactly 'g-recaptcha-response'
      })
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');

        document.getElementById('contact-form').reset(); // Reset all input fields in the form to their initial values
        grecaptcha.reset(); // Reset the reCAPTCHA widget after successful submission

      }, function(error) {
        console.log('FAILED...', error);
        alert('Error submitting form.');
      });
    }
});
  

  // Handle form submission directly without reCAPTCHA
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from submitting traditionally
    
//     var form = document.getElementById("contact-form");

//     console.log("Sending form without reCAPTCHA...");

//     // Send form data via EmailJS
//     emailjs.sendForm("contact_service", "contact_form", form)
//         .then((response) => {
//             console.log("Form sent successfully!", response);
//             alert("Form submitted successfully!");
//         })
//         .catch((error) => {
//             console.error("Form submission failed:", error);
//             alert("Form submission failed. Check console for details.");
//         });
// });