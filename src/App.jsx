import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
