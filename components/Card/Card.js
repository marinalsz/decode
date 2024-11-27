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
      <p id="rankingPosition">${artist.rankingPosition}</p>
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
        <p id="rankingPosition">${artist.rankingPosition}</p>
        <h3>${artist.name}</h3>
        <p>${artist.hometown}</p>
        <div class="profile">
            <img src="${artist.image}" alt="${artist.name}" />
            <div class="stats">
                <div>
                    <p><strong>Genre</strong> ${artist.genre}</p>
                    <p><strong>Label</strong> ${artist.label}</p>
                </div>
                <div>
                    <p><strong>Age</strong> ${artist.age}</p>
                    <p><strong>Debut year</strong> ${artist.debutYear}</p>
                </div>
            </div>
        </div>
        <p>${artist.description}</p>
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
          <p id="rankingPosition">${artist.rankingPosition}</p>
          <h3>${artist.name}</h3>
          <p>${artist.hometown}</p>
          <div class="profile">
            <img src="${artist.image}" alt="${artist.name}" />
            <div class="stats">
                <div>
                    <p><strong>Genre</strong> ${artist.genre}</p>
                    <p><strong>Label</strong> ${artist.label}</p>
                </div>
                <div>
                    <p><strong>Age</strong> ${artist.age}</p>
                    <p><strong>Debut year</strong> ${artist.debutYear}</p>
                </div>
            </div>
            <div>
              <p><strong>Albums</strong> ${artist.stats.albums}</p>
              <p><strong>Tours</strong> ${artist.stats.tours}</p>
              <p><strong>Listeners</strong> ${artist.stats.listeners}</p>
              <p><strong>Streams</strong> ${artist.stats.streams}</p>
            </div>
          </div>
          <p>${artist.description}</p>
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
