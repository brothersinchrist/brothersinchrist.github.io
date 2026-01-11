<script>
async function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const payload = {
    title: "Contact: " + data.get("subject"),
    body:
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n\n` +
      data.get("message")
  };

  const res = await fetch("https://api.github.com/repos/brothersinchrist/menofgod-contact/issues", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + window.CONTACT_TOKEN,
      "Accept": "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    alert("Message sent successfully.");
    form.reset();
  } else {
    alert("There was a problem sending your message. Please try again later.");
  }

  return false;
}
</script>
