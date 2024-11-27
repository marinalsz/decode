import "./Footer.css";
import data from "../../data/data.js";

const { subtitle } = data;

const Footer = () => `
<footer>
  <p id="subtitle">${subtitle}</p>
</footer>
`;

export default Footer;
