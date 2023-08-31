import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [dogImage,setDogImage]=useState("");
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response)=>response.json())
      .then((data)=>{
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error)=>{
        console.error("Error al obtener la imagen: ",error)
      });
  },[]);
 

  return (
    <div className='App'>
      <h1>Veamos perritos</h1>
      {loading? (
        <p>Cargando</p>
      ):(
        <div>
          <img src={dogImage} alt="Un perro random" />
        </div>
      )}
    </div>
  )
}

export default App