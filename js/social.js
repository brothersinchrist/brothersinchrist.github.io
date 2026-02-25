// public/js/social.js

function comingSoon(name) {
  if (typeof openModal === "function") {
    openModal(
      "Coming Soon",
      `${name} is not available yet, but it’s on the way.`
    );
  }
}
