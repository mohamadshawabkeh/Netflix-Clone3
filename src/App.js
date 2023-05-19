import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Navbar1 from './components/Navbar';
import Favlist from './components/FavList';

function App() {
  return (
   <>
   <Navbar1 />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favlist" element={<Favlist />} />
    </Routes> 
    </>
  )
}

export default App;