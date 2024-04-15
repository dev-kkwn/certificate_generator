import logo from "./logo.svg";
import "./App.css";
import { Forms } from "./components/form";
import { Route, Routes } from "react-router-dom";
import Certificate from "./components/certificate";
import { Table } from "./components/table";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" exact element={<Forms />} />
        <Route path="/certificate/:id" exact element={<Certificate />} />
      </Routes> */}
      <Table/>
    </>
  );
}

export default App;
