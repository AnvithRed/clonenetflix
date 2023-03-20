import './App.css';
import Home from './Components/home/home';
import Login from './Components/Login/login';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Register from './Components/register/Register';
import Player from '../src/Components/player/player'

function App() {
  return(
   <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Register/> } />
    <Route path="home" element={<Home/> } />
    <Route path="login" element={<Login/> } />
    <Route path="player" element={<Player/> } />
   </Routes>
   </BrowserRouter>
</div>
);

  
}

export default App;
