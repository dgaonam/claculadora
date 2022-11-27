import Teclado from "./components/Teclado";
import Pantalla from "./components/Pantalla";
import { useState } from "react";

function App() {
  const [numero,setNumero] = useState(0);
  return (
    <div className="App">
      <Pantalla />
      <Teclado />
    </div>
  );
}

export default App;
