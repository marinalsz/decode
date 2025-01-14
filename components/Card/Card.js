import "./Card.css";

const Card = (type, filteredArtists) => {
  if (type === "skim") {
    return `
      ${filteredArtists
        .map(
          (artist) => `
        <article class="card skim" data-genre="${artist.genre}" data-label="${artist.label}" data-info="skim">
          <span id="rankingPosition">${artist.rankingPosition}</span>
          <h3>${artist.name}</h3>
        </article>
      `
        )
        .join("")}
    `;
  } else if (type === "peruse") {
    return `
      ${filteredArtists
        .map(
          (artist) => `
        <article class="card peruse" data-genre="${artist.genre}" data-label="${artist.label}" data-info="peruse">
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
      ${filteredArtists
        .map(
          (artist) => `
        <article class="card deep-dive" data-genre="${
          artist.genre
        }" data-label="${artist.label}" data-info="deep-dive">
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
                      <p><strong>Albums</strong></p>
                      <p>${artist.stats.albums}</p>
                      <p><strong>Listeners</strong></p>
                      <p>${artist.stats.listeners}</p>
                  </div>
                  <div class="stats-two">
                      <p><strong>Age</strong></p>
                      <p>${artist.age}</p>
                      <p><strong>Debut year</strong></p>
                      <p>${artist.debutYear}</p>
                      <p><strong>Tours</strong></p>
                      <p>${artist.stats.tours}</p>
                       <p><strong>Streams</strong></p>
                      <p>${artist.stats.streams}</p>
                  </div>
              </div>
          </div>
          <p class="description">${artist.description}</p>
          <section class="skill">
            <h3>Skills</h3>
            <ul class="skills">
            ${artist.skills
              .map(
                (skill) => `
            <li>
              <img src="${skill.image}" alt="${skill.name}" class="skill-image" />
              <p>${skill.name}</p>
            </li>
            `
              )
              .join("")}
            </ul>
          </section>
      <p class="description"><strong>Analysis:</strong> ${artist.analysis}</p>
      </article>
      `
        )
        .join("")}
    `;
  }
};

export default Card;
