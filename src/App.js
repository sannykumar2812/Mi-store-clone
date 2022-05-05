import './App.css';

import PreNavbar from './components/PreNavbar';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <Router>
    <PreNavbar />
    <NavBar />
    </Router>
  );
}

export default App;
