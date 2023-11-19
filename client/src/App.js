import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingUp from './Components/SingUp';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SingUp/>}  />
          <Route  path="/login" element={<Login/>} />
          <Route  path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
