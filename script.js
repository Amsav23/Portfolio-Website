// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// CONTACT FORM
(function() {
  emailjs.init('kgKwvTqUKVEEFh0Lt'); // 1. Initialize EmailJS with your user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting immediately

  // 2. Get a response (token) from reCAPTCHA
  // 'recaptchaResponse' will hold the reCAPTCHA token, which is a unique string generated when the user completes the reCAPTCHA challenge.
  // 'grecaptcha.getResponse' retrieves the current reCAPTCHA token, which is needed to verify that the user passed the reCAPTCHA test.
  const recaptchaResponse = grecaptcha.getResponse();

  // 3a. Check if the user clicked the reCAPTCHA check box
  if (recaptchaResponse.length === 0) {
      alert('Please complete the reCAPTCHA.'); // Alert pops up if the user has NOT completed the reCAPTCHA
  } else {
      // 3b. I need to initiate an async request to send an email through the EmailJS service
      // If the user clicked the check box and filled out the required fields, send the contact form to me
      // 'contact_service' is the "service ID" registered with EmailJS
      // 'contact_form' is the "template ID" created in EmailJS
      emailjs.send('contact_service', 'contact_form', {
          name: document.querySelector('[name="user_name"]').value,
          email: document.querySelector('[name="user_email"]').value,
          message: document.querySelector('[name="message"]').value,
          'g-recaptcha-response': recaptchaResponse // Include the reCAPTCHA token to allow the server to verify that the user completed the reCAPTCHA challenge.
      })
      // 4. Because 'emailjs.send' returns a Promise, use '.then()' to define what should happen if the email sends successfully and '.catch()' to handle any errors.
      // 'response' is a single parameter which represents the result returned from the Promise if it resolves successfully.
      .then(function(response) {
          // 'response.status' logs the status of the response, which is usually a numeric code (e.g., '200' for a successful HTTP request).
          // 'response.text' is useful for debugging and understanding what happened during the request (e.g., 'response.text' could say "Message sent successfully" in the console).
          console.log('Notification sent successfully!', response.status, response.text);
          alert('Form submitted successfully!');

          // Reset the form after sending the notification
          document.getElementById('contact-form').reset();
          
          // Reset reCAPTCHA for next use
          grecaptcha.reset();
      })
      .catch(function(error) {
          console.log('Notification FAILED...', error);
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