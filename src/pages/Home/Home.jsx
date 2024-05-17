import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="Home">
      <img
        className="logo"
        src="/assets/img/clover-t-white.png"
        alt="icone da logo"
      />
      <h1>
        my<span className="bold">sad</span>littlegarden
      </h1>
      <div className="link-wrp">
        <Link to="/pr">
          <img
            src="/assets/icons/suitcase.svg"
            alt="icone de maleta de trabalho"
          />
          Profissional
        </Link>
        <Link to="/pe">
          <img src="/assets/icons/user.svg" alt="icone de usuário" />
          Pessoal
        </Link>
      </div>
    </main>
  );
};

export default Home;
