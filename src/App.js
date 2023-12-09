import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage';
import { EmployeeDashboard } from './components/EmployeeDashboard';
import { EmpInfo } from './components/EmpInfo';

function App() {  

  return (
    <div className='main'>

      <div className='name'>My name is Animesh</div>
      
      <Routes>

        <Route path='/' element={<LoginPage/>}/>

        <Route path='/dashboard' element={<EmployeeDashboard/>}/>

        <Route path="/details" element={<EmpInfo/>}/>

      </Routes>
    </div>
  );
}

export default App;
