import "./App.css";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <>
      <p className="flex justify-center text-4xl font-bold mt-5 mb-5">
        CALCULATOR
      </p>
      <div className="flex justify-center">
        <Calculator></Calculator>
      </div>
    </>
  );
}

export default App;
