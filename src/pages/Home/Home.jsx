import "./Home.css";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <>
      <Header currentPage="home" />
      <p>a</p>
      <button onClick={() => setShowAboutMe(!showAboutMe)}>
        ABOUT MEEEEEEEEEE
      </button>
      <Modal title="Sobre Mim" show={showAboutMe} />
    </>
  );
};

export default Home;
