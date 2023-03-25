import "./App.css";

import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <ItemListContainer mimensaje="Estaremos cargando los productos" />
    </div>
  );
}

export default App;
