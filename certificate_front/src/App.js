import logo from "./logo.svg";
import "./App.css";
import { Forms } from "./components/form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Forms />
      <Routes>
        <Route path="certificate" exact element={<Certificate />} />
      </Routes>
    </>
  );
}

export default App;
