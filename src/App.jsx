import PorfoleoSection from "./componentes/FormularioEncuesta";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PorfoleoSection />} />
      </Routes>
    </Router>
  );
}

export default App;
