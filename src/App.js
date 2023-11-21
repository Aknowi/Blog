import "./App.css";
import "./style.scss";
import "./media-query.css";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { AddEditBlog } from "./pages/AddEditBlog";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={<AddEditBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
