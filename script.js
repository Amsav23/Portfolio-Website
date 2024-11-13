(function() {
  emailjs.init('kgKwvTqUKVEEFh0Lt'); // Initialize EmailJS with your user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting immediately

  // Get the reCAPTCHA token
  const recaptchaResponse = grecaptcha.getResponse();

  // Check if reCAPTCHA is completed
  if (recaptchaResponse.length === 0) {
      alert('Please complete the reCAPTCHA.'); // Alert if the user has NOT completed the reCAPTCHA
  } else {
      // Send the notification email to yourself
      emailjs.send('contact_service', 'contact_form', {
          name: document.querySelector('[name="user_name"]').value,
          email: document.querySelector('[name="user_email"]').value,
          message: document.querySelector('[name="message"]').value,
          'g-recaptcha-response': recaptchaResponse // Include the reCAPTCHA token
      })
      .then(function(response) {
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


// ORIGINAL JS before the JS above worked
// // Initialize EmailJS
// (function() {
//     emailjs.init('kgKwvTqUKVEEFh0Lt');
//   })();

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting immediately
  
//     // Get the reCAPTCHA token
//     /*If the user has successfully completed the reCAPTCHA challenge 
//     (like clicking the "I'm not a robot" checkbox), this method will return a string token.*/
//     const recaptchaResponse = grecaptcha.getResponse();
  
//     if (recaptchaResponse.length === 0) { /* If this condition is true, it means the user needs to 
//           complete the reCAPTCHA before submitting the form. */
//           alert('Please complete the reCAPTCHA.'); // Alert if the user has NOT completed the reCAPTCHA
//     } else {
//           // If reCAPTCHA is completed, proceed to send form data
//           // 1. Send the notification email to yourself
//           emailjs.send('contact_service', 'contact_form', {
//               // My form data
//               name: document.querySelector('[name="user_name"]').value,
//               email: document.querySelector('[name="user_email"]').value,
//               message: document.querySelector('[name="message"]').value,
//               'g-recaptcha-response': recaptchaResponse // Make sure the token is named exactly 'g-recaptcha-response'
//           })

//           .then(function(response) {
//               console.log('Notification sent successfully!', response.status, response.text);

//               // 2. Reset the reCAPTCHA to generate a new token
//               grecaptcha.reset();

//                // 3. Send the auto-reply email
//                 emailjs.send('contact_service', 'contact_reply', {
//                   name: document.querySelector('[name="user_name"]').value,
//                   email: document.querySelector('[name="user_email"]').value,
//                   'g-recaptcha-response': recaptchaResponse // Use the same token for auto-reply
//                 })
//                 .then(function(response) {
//                     console.log('Auto-reply sent successfully!', response.status, response.text);
//                     alert('Form submitted successfully!');
                
//                     // Reset the form after both emails have sent successfully
//                     document.getElementById('contact-form').reset(); // Reset form fields
//                 })
//                 .catch(function(error) {
//                     console.log('Auto-reply FAILED...', error);
//                     alert('Error sending auto-reply email.');
//                 });
//           })
//           .catch(function(error) {
//               console.log('Notification FAILED...', error);
//               alert('Error submitting form.');
//           });
//       }
// });



  

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