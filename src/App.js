
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Layout/Navbar"
import Home from './components/Pages/Home';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from './components/Pages/AccountPage';
import CreateAcc from './components/Pages/CreateAcc';
import LogIn from './components/Pages/LogIn';
function App() {
  return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<LogIn />}/>
          <Route exact path="/signup" element={<CreateAcc />}/>
          <Route exact path="/account" element={<AccountPage />}/>
        </Routes>
        <Footer />
      </Router>
      </div>
    
  );
}

export default App;
