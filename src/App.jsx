import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Info from "./Components/Info/Info";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Info />
    </div>
  );
}

export default App;
