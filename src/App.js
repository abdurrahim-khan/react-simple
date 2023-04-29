import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './Profile';
import Header from './Header';
import Signup from './Signup';
function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    
    </Router>
    </>
  );
}
export default App;
