import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
