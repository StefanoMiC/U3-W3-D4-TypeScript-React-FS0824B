import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <>
      <ClassComponent subtitle="Primo componente in TypeScript" color="purple" />
      <ClassComponent subtitle="Secondo componente in TypeScript" />
    </>
  );
}

export default App;
