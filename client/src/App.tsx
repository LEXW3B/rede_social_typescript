// import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/private"}>Página Privada</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
