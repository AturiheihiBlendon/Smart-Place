import './App.css';
import Register from './Pages/register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Send_message from './Pages/message';

function App() {
  return (
    // <div className="App">
    //   <Register />
    // </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/message' element={<Send_message/>}></Route>
    </Routes>
  );
}

export default App;
