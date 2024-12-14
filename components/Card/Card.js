import "./Card.css";
import data from "../../data/data";

const { artists } = data;

const Card = (type) => {
  if (type === "skim") {
    return `
    ${artists
      .map(
        (artist) => `
      <article class="card skim">
        <span id="rankingPosition">${artist.rankingPosition}</span>
        <h3>${artist.name}</h3>
      </article>
      `
      )
      .join("")}
    `;
  } else if (type === "peruse") {
    return `
      ${artists
        .map(
          (artist) => `
        <article class="card peruse">
          <span id="rankingPosition">${artist.rankingPosition}</span>
          <h3>${artist.name}</h3>
          <p>${artist.hometown}</p>
          <div class="profile">
              <img src="${artist.image}" alt="${artist.name}" />
              <div class="stats">
                  <div class="stats-one">
                      <p><strong>Genre</strong></p>
                      <p>${artist.genre}</p>
                      <p><strong>Label</strong></p>
                      <p>${artist.label}</p>
                  </div>
                  <div class="stats-two">
                      <p><strong>Age</strong></p>
                      <p>${artist.age}</p>
                      <p><strong>Debut year</strong></p>
                      <p>${artist.debutYear}</p>
                  </div>
              </div>
          </div>
          <p class="description">${artist.description}</p>
        </article>
        `
        )
        .join("")}
      `;
  } else if (type === "deep-dive") {
    return `
       ${artists
         .map(
           (artist) => `
        <article class="card deep-dive">
          <span id="rankingPosition">${artist.rankingPosition}</span>
          <h3>${artist.name}</h3>
          <p>${artist.hometown}</p>
          <div class="profile">
              <img src="${artist.image}" alt="${artist.name}" />
              <div class="stats">
                  <div class="stats-one">
                      <p><strong>Genre</strong></p>
                      <p>${artist.genre}</p>
                      <p><strong>Label</strong></p>
                      <p>${artist.label}</p>
                  </div>
                  <div class="stats-two">
                      <p><strong>Age</strong></p>
                      <p>${artist.age}</p>
                      <p><strong>Debut year</strong></p>
                      <p>${artist.debutYear}</p>
                  </div>
              </div>
          </div>
          <p class="description">${artist.description}</p>
          <h3>Skills</h3>
          <div class="skills">
          ${artist.skills
          .map(
            (skill) => `
          <div class="skill">
            <img src="${skill.image}" alt="${skill.name}" class="skill-image" />
            <p>${skill.name}</p>
          </div>
        `
          )
          .join("")}
        </div>
        <h3>Awards</h3>
        <ul class="awards">
        ${artist.awards
          .map(
            (award) => `
          <li>
            <img src="${award.image}" alt="${award.name}" class="award-image" />
            ${award.name} (x${award.quantity})
          </li>
        `
          )
          .join("")}
      </ul>
      <p><strong>Analysis:</strong> ${artist.analysis}</p>
      </article>
        `
         )
         .join("")}
        `;
  }
};

export default Card;
