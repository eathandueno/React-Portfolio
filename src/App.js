import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./components/Footer/Footer";
import Nature from "./components/Nature/Nature";
import Equipment from "./components/Equipment/Equipment";
import RealEstate from "./components/RealEstate/RealEstate";
import Urban from "./components/Urban/Urban";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Urban" element={<Urban />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Equipment" element={<Equipment/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
