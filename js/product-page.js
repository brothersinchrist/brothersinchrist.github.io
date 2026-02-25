document.addEventListener("DOMContentLoaded", () => {
  const product = window.MOG_PRODUCT;

  const colorSelect = document.getElementById("color");
  const sizeSelect = document.getElementById("size");
  const priceEl = document.getElementById("price");
  const imageEl = document.getElementById("product-image");

  const stripeInput = document.getElementById("stripe_price_id");
  const variantInput = document.getElementById("printful_variant_id");

  function loadSizes(color) {
    const variants = product.variants_by_color[color];
    sizeSelect.innerHTML = "";

    variants.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.size;
      opt.textContent = v.size;
      sizeSelect.appendChild(opt);
    });

    loadVariant();
  }

  function loadVariant() {
    const color = colorSelect.value;
    const size = sizeSelect.value;

    const variant = product.variants_by_color[color].find(v => v.size === size);
    if (!variant) return;

    priceEl.textContent = variant.price;
    imageEl.src = variant.image;

    stripeInput.value = variant.stripe_price_id;
    variantInput.value = variant.variant_id;
  }

  // Initialize
  loadSizes(colorSelect.value);

  colorSelect.addEventListener("change", () => loadSizes(colorSelect.value));
  sizeSelect.addEventListener("change", loadVariant);
});
