import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
         
      </Router>

    </div>
  );
}
