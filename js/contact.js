// public/js/contact.js

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", handleContactSubmit);

});


async function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
    website: data.get("website") // honeypot
  };

  try {

    const res = await fetch(
      "https://menofgod-contact-worker.menofgod-worker.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    if (res.ok) {

      openModal(
        "Message Sent",
        "Thanks for reaching out. We’re grateful for your message and will follow up soon."
      );

      form.reset();

    } else {

      openModal(
        "Error",
        "There was a problem sending your message. Please try again."
      );

    }

  } catch (err) {

    console.error("Contact submit error:", err);

    openModal(
      "Error",
      "Unexpected error. Please try again later."
    );

  }
}
