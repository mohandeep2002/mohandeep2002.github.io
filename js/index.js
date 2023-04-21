function sendEmail(){
  const emailParams = {
    to_name: "Mohandeep Checking",
    from_name: "Maddy",
    message: "Test email"
  };
  emailjs.send("service_9j3inip","template_w2j64pe", emailParams)
    .then(function(response) {
      console.log("Email sent successfully", response);
    })
    .catch(function(error) {
      console.error("Failed to send email", error);
    });
}

