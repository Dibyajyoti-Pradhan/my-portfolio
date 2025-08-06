// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import SimpleGameApp from "./SimpleGameApp";

const handleKeyboardNavigation = (event) => {
  const focusableElements = 'a, button, [tabindex="0"]';
  const elements = [...document.querySelectorAll(focusableElements)];
  const currentIndex = elements.indexOf(document.activeElement);

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    const nextIndex = (currentIndex + 1) % elements.length;
    elements[nextIndex].focus();
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
    elements[prevIndex].focus();
  }
};

document.addEventListener("keydown", handleKeyboardNavigation);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleGameApp />
  </React.StrictMode>
);
