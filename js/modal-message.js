// public/js/modal-message.js

function pageMessage(title, message){
  if (typeof openModal === "function") {
    openModal(
      `${title}`,
      `${message}`
    );
  }
}
