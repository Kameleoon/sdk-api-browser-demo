export function showMessage(variationKey: string): void {
  const message = document.createElement("p");
  message.textContent =
    `Your variation is: ${variationKey}.` +
    "\n" +
    "You'll see a popup when leaving the screen";

  document.body.appendChild(message);
}

export function showPopup(): void {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent = "Popup Content";

  document.addEventListener("mouseleave", function (event) {
    if (
      event.clientY <= 0 ||
      event.clientX <= 0 ||
      event.clientX >= window.innerWidth ||
      event.clientY >= window.innerHeight
    ) {
      document.body.appendChild(popup);
    }
  });

  document.addEventListener("mouseenter", function () {
    if (document.body.contains(popup)) {
      popup.remove();
    }
  });
}
