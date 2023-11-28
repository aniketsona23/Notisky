import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components and pages
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-note" element={<CreateNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
