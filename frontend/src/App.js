import logo from "./logo.svg";
import "./App.css";
import Product from "./pages/Product";
import Modal from "react-modal";
import Table from "./pages/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/productList" element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
