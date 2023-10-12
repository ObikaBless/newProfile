import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Auth/SignUp/Index';
import Login from './Auth/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        {/* <Route path='/' element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
