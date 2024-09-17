// Initialize EmailJS SDK with my public key
(function () {
    emailjs.init("kgKwvTqUKVEEFh0Lt"); // My EmailJS public key
    console.log("Initialized EmailJS");
})();

// // reCAPTCHA callback function triggered when user submits the form
// function onSubmit(token) {
//     console.log("reCAPTCHA token received:", token);

//     // Add the reCAPTCHA token to the form as a hidden input
//     var form = document.getElementById("contact-form");
//     var hiddenInput = document.createElement("input");
//     hiddenInput.setAttribute("type", "hidden");
//     hiddenInput.setAttribute("name", "g-recaptcha-response");
//     hiddenInput.setAttribute("value", token);
//     form.appendChild(hiddenInput);

//     // Now, send the form data with the reCAPTCHA token via EmailJS
//     console.log("Sending form with reCAPTCHA...");

//     emailjs.sendForm("contact_service", "contact_form", form)
//         .then((response) => {
//             console.log("Form sent successfully!", response);
//             alert("Form submitted successfully!");
//         })
//         .catch((error) => {
//             console.error("Form submission failed:", error);
//             alert("Form submission failed. Check console for details.");
//         });

//     return false; // Prevent the form from reloading the page
// }

// Handle form submission directly without reCAPTCHA
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    
    var form = document.getElementById("contact-form");

    console.log("Sending form without reCAPTCHA...");

    // Send form data via EmailJS
    emailjs.sendForm("contact_service", "contact_form", form)
        .then((response) => {
            console.log("Form sent successfully!", response);
            alert("Form submitted successfully!");
        })
        .catch((error) => {
            console.error("Form submission failed:", error);
            alert("Form submission failed. Check console for details.");
        });
});