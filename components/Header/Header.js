import "./Header.css";
import data from "../../data/data.js";

const { logo, logo_alt, opener, opener_alt, title, subtitle} =
  data;

const Header = () => `
<header>
  <img src="${logo}" alt="${logo_alt}" id="logo"/>
  <div>
      <img src="${opener}" alt="${opener_alt}" id="opener"/>
    <h1>${title}</h1>
  </div>
  <p id="subtitle">${subtitle}</p>
</header>
`;

export default Header;
