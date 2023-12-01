// Email Verification...
  function sendMail() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    const params = {
      firstname,
      lastname,
      email,
      number,
      message,
    };
  
    const serviceID = "service_mb2pdac"; // Replace with your Service ID
    const templateID = "template_psu6gju"; // Replace with your Template ID
  
    emailjs.init("ZevkBP9hsrZZ1wP4Z"); // Replace with your User ID
  
    emailjs.send(serviceID, templateID, params).then(
      function (response) {
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully");
      },
      function (error) {
        console.error("Email send failed:", error);
        alert("An error occurred while sending the email.");
      }
    );
    // console.log("Hello");
  }
  
  