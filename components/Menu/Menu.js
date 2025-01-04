import "./Menu.css";
import Card from "../Card/Card";
import data from "../../data/data";

const { logo, logo_alt, opener, opener_alt, title, subtitle } = data;

const Menu = () => `
<div class="modal-container">
  <button class="modal-trigger">🔍</button>
  <div class="modal-overlay hidden">
    <div class="modal">
      <div class="filter_item">
        <label for="cardType">Filter by information</label>
        <select name="cardType" id="cardType">
          <option value="skim">Skim</option>
          <option value="peruse">Peruse</option>
          <option value="deep-dive">Deep Dive</option>
        </select>
      </div>
      <div class="filter_item">
        <label for="genreType">Filter by genre</label>
        <select name="genreType" id="genreType">
          <option value="alte">Alté</option>
          <option value="alternative">Alternative</option>
          <option value="flamenco">Flamenco</option>
          <option value="pop">Pop</option>
          <option value="r&b">R&B</option>
          <option value="urban-pop">Urban Pop</option>
        </select>
      </div>
      <div class="filter_item">
        <label for="recordLabel">Filter by label</label>
        <select name="recordLabel" id="recordLabel">
          <option value="atlantic">Atlantic</option>
          <option value="capitol">Capitol</option>
          <option value="columbia">Columbia</option>
          <option value="epic">Epic</option>
          <option value="fader">Fader</option>
          <option value="geffen">Geffen</option>
          <option value="interscope">Interscope</option>
          <option value="island">Island</option>
          <option value="rca">RCA</option>
          <option value="republic">Republic</option>
          <option value="sony">Sony</option>
          <option value="universal">Universal</option>
          <option value="warner">Warner</option>
        </select>
      </div>
      <button id="applyFilters" class="apply-filters">Apply Filters</button>
    </div>
  </div>
</div>
`;

export default Menu;
