import "./Main.css";
import data from "../../data/data";

const { hero_title, hero_image, hero_alt, hero_description } = data;

const Main = () => `
<main>
  <section id="hero">
    <h2>${hero_title}</h2>
    <img src="${hero_image}" alt="${hero_alt}" id="hero-image"/>
    <p id="hero-description">${hero_description}</p>
  </section>
  <section id="artists">  
  </section>
</main>
`;

export default Main;
