import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ currentPage }) => {
  return (
    <header>
      <div id="header-left-content">
        <Link to="/">
          <img
            id="header-logo"
            src="/assets/img/clover-t-white.svg"
            alt="imagem da logo"
          />
        </Link>
        <div id="page-info">
          <h1>
            My<span className="bold">Sad</span>LittleGarden
          </h1>
          <h2 className="dim">{currentPage}</h2>
        </div>
      </div>

      <button type="button">k</button>
    </header>
  );
};

export default Header;
