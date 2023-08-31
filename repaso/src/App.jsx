import { useState } from 'react'
import './App.css'
import Form from './Form';
import Turnos from './Turnos';

function App() {

 const [pacientes,setPacientes]=useState([]);

  const addPatient= (patient) => {
    setPacientes([...pacientes,patient]);
    console.log(pacientes)
  };
  
  return (
   <div className="App">
      <h1>Registro de pacientes</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>
   </div>
  );
}

export default App
