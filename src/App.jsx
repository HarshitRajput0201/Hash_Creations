import './App.css';
import Home from "./pages/Home.jsx";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/Hash_Creations/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;