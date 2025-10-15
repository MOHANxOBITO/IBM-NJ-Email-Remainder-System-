document.getElementById("reminderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const delay = parseInt(document.getElementById("delay").value); // in minutes

  document.getElementById("status").innerText = `Reminder set! Email will be sent in ${delay} minute(s).`;

  // Convert delay to milliseconds
  const delayMs = delay * 60 * 1000;

  setTimeout(() => {
    sendEmail(email, subject, message);
  }, delayMs);
});

function sendEmail(to, subject, body) {
  Email.send({
    SecureToken: "YOUR_SMTPJS_SECURE_TOKEN", // Replace with your own
    To: to,
    From: "you@example.com", // Replace with your verified sender
    Subject: subject,
    Body: body,
  }).then((message) => {
    document.getElementById("status").innerText = "Reminder email sent!";
  }).catch((err) => {
    document.getElementById("status").innerText = "Failed to send email.";
    console.error(err);
  });
}
