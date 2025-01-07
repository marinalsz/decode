import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import data from "./data/data";

const { artists } = data;

document.querySelector("#app").innerHTML = `
${Header()}
${Main()}
${Footer()}
`;

const modalOverlay = document.querySelector(".modal-overlay");
const applyFiltersBtn = document.querySelector(".btn.secondary");

//Abrir modal
document.querySelector(".btn.primary").addEventListener("click", () => {
  const toggleModal = () => {
    modalOverlay.classList.toggle("hidden");
  };
  toggleModal();
});

//Cerrar modal
document.querySelector(".modal-overlay").addEventListener("click", (e) => {
  const closeModal = (event) => {
    if (e.target === modalOverlay || e.target === applyFiltersBtn) {
      modalOverlay.classList.add("hidden");
    }
  };
  closeModal();
});

// Filtrar los artistas
const filterArtists = (type, genre, label) => {
  return artists.filter((artist) => {
    const matchesGenre = !genre || artist.genre === genre;
    const matchesLabel = !label || artist.label === label;
    return matchesGenre && matchesLabel;
  });
};

// Renderizar las cartas
const renderCards = (type, genre, label) => {
  const filteredArtists = filterArtists(type, genre, label);
   // Verifica si hay artistas filtrados
   if (filteredArtists.length === 0) {
    document.getElementById("artists").innerHTML = "<p>No artists found for the selected filters.</p>";
  } else {
    // Llamar a la función Card pasando el tipo y los artistas filtrados
    document.getElementById("artists").innerHTML = Card(type, filteredArtists);
  }
};

// Aplicar los filtros al hacer click en el botón
applyFiltersBtn.addEventListener("click", () => {
  const selectedType = document.getElementById("cardType").value || "peruse";
  const selectedGenre = document.getElementById("genreType").value || "";
  const selectedLabel = document.getElementById("recordLabel").value || "";

  renderCards(selectedType, selectedGenre, selectedLabel);
});

//Renderizar las cartas por defecto
renderCards("deep-dive", "", "");