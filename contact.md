---
layout: default
title: "Contact | Men of God"
permalink: /contact/
---

<section class="hero">
  <h1>Contact Us</h1>
  <p class="hero-statement">
    Honest conversations start with reaching out.
  </p>
  <p class="tagline">
    Whether you have a question, a topic idea, or want to be a guest,
    we'd like to hear from you.
  </p>
</section>

<section class="section contact-grid">

  <div class="contact-card card">
    <h2>Send Us a Message</h2>
    <form
      class="contact-form"
      method="POST"
      action="#"
      onsubmit="return handleContactSubmit(event);"
    >
      <label>Name
        <input type="text" name="name" required />
      </label>

      <label>Email
        <input type="email" name="email" required />
      </label>

      <label>Subject
        <select name="subject">
          <option>General Question</option>
          <option>Topic Suggestion</option>
          <option>Guest Inquiry</option>
          <option>Media / Business</option>
        </select>
      </label>

      <label>Message
        <textarea name="message" rows="5" required></textarea>
      </label>

      <button type="submit" class="btn primary">Send Message</button>

      <p class="form-note">
        This form currently sends messages via email processing.
        We will never sell your information.
      </p>
    </form>
  </div>

  <div class="contact-card card">
    <h2>Connect With Us</h2>
    <p>
      Men of God is about building leaders, strengthening families,
      and having honest conversations rooted in faith, responsibility,
      and love of country.
    </p>

    <div class="social-links">
      <a href="#" aria-label="YouTube">
        <img src="{{ '/assets/page/icons/youtube.svg' | relative_url }}" alt="" />
        YouTube
      </a>
      <a href="#" aria-label="X">
        <img src="{{ '/assets/page/icons/x.svg' | relative_url }}" alt="" />
        X (Twitter)
      </a>
      <a href="#" aria-label="Facebook">
        <img src="{{ '/assets/page/icons/facebook.svg' | relative_url }}" alt="" />
        Facebook
      </a>
      <a href="#" aria-label="Instagram">
        <img src="{{ '/assets/page/icons/instagram.svg' | relative_url }}" alt="" />
        Instagram
      </a>
      <a href="#" aria-label="Rumble">
        <img src="{{ '/assets/page/icons/rumble.svg' | relative_url }}" alt="" />
        Rumble
      </a>
    </div>

    <div class="contact-email">
      <strong>Email:</strong><br />
      contact@menofgodpodcast.com
    </div>

    <p class="contact-note">
      We read every message. While we may not respond to all of them,
      your voice matters.
    </p>
  </div>

</section>

<script>
function handleContactSubmit(event) {
  event.preventDefault();
  alert(
    "Thank you for reaching out. " +
    "We've received your message and will review it."
  );
  event.target.reset();
  return false;
}
</script>
