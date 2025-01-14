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

//Función para abrir modal
document.querySelector(".btn.primary").addEventListener("click", () => {
  const toggleModal = () => {
    modalOverlay.classList.toggle("hidden");
  };
  toggleModal();
});

//Función para cerrar modal
modalOverlay.addEventListener("click", (e) => {
  const closeModal = (event) => {
    if (e.target === modalOverlay || e.target === applyFiltersBtn) {
      modalOverlay.classList.add("hidden");
    }
  };
  closeModal();
});

//Filtrar los artistas
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

  //Si no hay artistas que coincidan con los filtos, se indica con un mensaje
  if (filteredArtists.length === 0) {
    document.getElementById("artists").innerHTML =
      "<p id='message'>No results</p>";

    const textElement = document.getElementById("message");
    const text = textElement.textContent;
    textElement.textContent = "";
    const colors = ["#e6c229", "#f17105", "#6610f2", "#1a8fe3"];

    // Crea spans para cada letra
    text.split("").forEach((char, index) => {
      if (char === " ") {
        const space = document.createElement("span");
        space.className = "space";
        textElement.appendChild(space);
      } else {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.backgroundColor = colors[index % colors.length];
        textElement.appendChild(span);
      }
    });
  } else {
    // En caso contrario, llama a la función Card pasando el tipo (de carta) y los artistas filtrados
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
renderCards("peruse", "", "");
