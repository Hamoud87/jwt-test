import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import './App.css';

function App() {
  return (
 <Router>
   <Navbar expand="lg">
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">    
       <NavLink to={"/"}  className="nav-link">Home</NavLink>
       <NavLink  to={"/loginpage"}  className="nav-link">Login</NavLink>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="loginpage" element={<LoginPage/>}/>
     </Routes>
   </Router>
  );
}

export default App;
