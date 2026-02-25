// Async copy function with fallback support
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard successfully!');
    } else {
      fallbackCopyToClipboard(text); // optional fallback
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
    fallbackCopyToClipboard(text); // optional fallback
  }
}

// Optional fallback function for older browsers
function fallbackCopyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    console.log('Text copied using fallback method.');
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textarea);
}

// Share copy button click handler
document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".mog-share-copy");
  if (!btn) return;

  const url = btn.dataset.copy;
  if (!url) return;

  await copyToClipboard(url);

  const label = btn.querySelector(".mog-share-label");
  const iconContainer = btn.querySelector(".mog-share-icon");
  const copyIcon = iconContainer.querySelector("svg.copy-icon");
  const checkIcon = iconContainer.querySelector(".check-icon svg");

  // Swap icons
  if (copyIcon && checkIcon) {
    copyIcon.style.display = "none";
    checkIcon.style.display = "inline";
  }

  // Change text
  const originalText = label.textContent;
  label.textContent = "Copied";

  // Reset after 2s
  setTimeout(() => {
    label.textContent = originalText;
    if (copyIcon && checkIcon) {
      copyIcon.style.display = "inline";
      checkIcon.style.display = "none";
    }
  }, 1000);
});
