import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>} index={0}/>
    <Route path='/signup' element={<Signin/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/result' element={<Result/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
