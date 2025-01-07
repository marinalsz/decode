import "./Menu.css";
import Button from "/components/Button/Button";

const Menu = () => `
<div class="modal-container">
  ${Button("🔍", "primary")}
  <div class="modal-overlay hidden">
    <div class="modal">
      <div class="filter-item">
        <label for="cardType">Filter by information</label>
        <select name="cardType" id="cardType">
          <option value="skim">Skim</option>
          <option value="peruse">Peruse</option>
          <option value="deep-dive">Deep Dive</option>
        </select>
      </div>
      <div class="filter-item">
        <label for="genreType">Filter by genre</label>
        <select name="genreType" id="genreType">
          <option value="">Select genre</option>
          <option value="Alté">Alté</option>
          <option value="Alternative">Alternative</option>
          <option value="Flamenco">Flamenco</option>
          <option value="Pop">Pop</option>
          <option value="R&B">R&B</option>
          <option value="Urban Pop">Urban Pop</option>
        </select>
      </div>
      <div class="filter-item">
        <label for="recordLabel">Filter by label</label>
        <select name="recordLabel" id="recordLabel">
          <option value="">Select label</option>
          <option value="Atlantic">Atlantic</option>
          <option value="Capitol">Capitol</option>
          <option value="Columbia">Columbia</option>
          <option value="Epic">Epic</option>
          <option value="Fader">Fader</option>
          <option value="Geffen">Geffen</option>
          <option value="Interscope">Interscope</option>
          <option value="Island">Island</option>
          <option value="RCA">RCA</option>
          <option value="Republic">Republic</option>
          <option value="Sony">Sony</option>
          <option value="Universal">Universal</option>
          <option value="Warner">Warner</option>
        </select>
      </div>
      ${Button("Apply Filters", "secondary")}
    </div>
  </div>
</div>
`;

export default Menu;

