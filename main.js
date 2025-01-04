import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

document.querySelector("#app").innerHTML = `
${Header()}
${Main()}
${Footer()}
`;

document.addEventListener("DOMContentLoaded", () => {
  const modalTrigger = document.querySelector(".modal-trigger");
  const modalOverlay = document.querySelector(".modal-overlay");
  const applyFiltersButton = document.getElementById("applyFilters");

  const toggleModal = () => {
    modalOverlay.classList.toggle("hidden");
  };

  const closeModal = () => {
    modalOverlay.classList.add("hidden");
  };

  // Open/close modal when clicking the trigger button
  modalTrigger.addEventListener("click", toggleModal);

  // Close modal when clicking outside or on "Apply Filters"
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay || e.target === applyFiltersButton) {
      closeModal();
    }
  });
});
