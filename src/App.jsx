// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from "./componentes/Login/Login"
import Dashboard from './componentes/dashboard/Dashboard';
// import { useEffect, useState } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashBoard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

  // const [data, setData] = useState({});
  // useEffect(() => {

  //   axios.get("https://pokeapi.co/api/v2/pokemon")
  //     .then(response => setData(response.data))
  //     .catch(error => console.log(error));

  //   // fetch("https://pokeapi.co/api/v2/pokemon")
  //   // .then(response => response.json())
  //   // .then(json => setData(json))
  //   // .catch(error => console.log(error));
  // }, []);

  // return (
  //   <div className='container'>
  //     <h1>Llamado de API pública</h1>
  //       <ul id="containerBox">
  //         {
  //           data.results?.map((pokemon) => (
  //             <li className='cardContainer'>{pokemon.name}</li>
  //           ))
  //         }
  //       </ul>
  //   </div>
  // )