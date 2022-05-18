import { CounterApp } from "./components/CounterApp";
import { PrimeraApp } from "./components/PrimeraApp";

function App() {
  return (
    <div>
      {/* <PrimeraApp saludo="Hola soy pepe" /> */}
      <CounterApp value={5} factor={4} />
    </div>
  );
}

export default App;
