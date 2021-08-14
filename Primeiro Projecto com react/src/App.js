import React from "react";
import Navbar from "./componentes/navbar";
import Main from "./componentes/main";
import Footer from "./componentes/footer";
import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
