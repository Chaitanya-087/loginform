import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
