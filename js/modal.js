// public/js/modal.js

function openModal(title, message) {
  const modal = document.getElementById("contact-modal");
  const overlay = document.getElementById("contact-overlay");

  if (!modal || !overlay) return;

  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;

  modal.classList.add("active");
  overlay.classList.add("show");

  modal.setAttribute("aria-hidden", "false");

  const closeBtn = document.querySelector(".mog-modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const modal = document.getElementById("contact-modal");
  const overlay = document.getElementById("contact-overlay");

  if (!modal || !overlay) return;

  modal.classList.remove("active");
  overlay.classList.remove("show");

  modal.setAttribute("aria-hidden", "true");
}


// ESC closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


// Click overlay closes modal
document.addEventListener("click", (e) => {
  const overlay = document.getElementById("contact-overlay");
  if (e.target === overlay) closeModal();
});
