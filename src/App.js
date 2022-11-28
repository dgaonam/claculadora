import ValoresContext from "./context/ValoresContext";
import Teclado from "./components/Teclado";

function App() {
  const valoresData={
    A:0,
    B:0,
    r:0,
    operacion:null
  };
  return (
    <div className="App">
      <ValoresContext.Provider value={valoresData}>
        <Teclado />
      </ValoresContext.Provider>
    </div>
  );
}

export default App;
