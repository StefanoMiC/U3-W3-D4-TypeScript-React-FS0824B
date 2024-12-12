import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/class"
          element={
            <>
              <ClassComponent subtitle="Primo componente in TypeScript" color="purple" />
              <ClassComponent subtitle="Secondo componente in TypeScript" />
            </>
          }
        />
        <Route
          path="/functional"
          element={
            <>
              <FunctionalComponent subtitle="Primo componente a Funzione in TS" color="blue" />
              <FunctionalComponent subtitle="Primo componente a Funzione in TS" />
            </>
          }
        />
        <Route path="/dynamic/:lat/:lon" element={<Dynamic />}></Route>
        <Route path="/form" element={<FormComponent />}></Route>
        <Route path="/fetch" element={<FetchComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
