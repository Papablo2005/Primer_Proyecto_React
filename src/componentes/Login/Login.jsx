import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import './Login.css'
import { useState } from 'react';

function Login(){
    const navigate = useNavigate();

    const [campo, setCampo] = useState("");

    const validateUser = () => {
        alert("Hola tu nombre es: " + campo);
        // campo != "nombre" ? alert("Usuario incorrecto") : navigate('/dashBoard');
        if(campo!="juan"){
            alert("Usuario incorrecto");
        }
        else{
            navigate('/dashBoard', {state: {nombreUsuario: {campo}}});
        }
    }
    return(
        <div id="contenedorLogin">
            <h1>Bienvenido al Banco</h1>
            <input type="text" 
            value={campo}
            onChange={(e) => setCampo(e.target.value)} 
            className="inputLogin" 
            placeholder="Ingrese su Usuario" 
            />
            <input type="password" 
            onChange={(e) => setCampo(e.target.value)} 
            className="inputLogin" 
            placeholder="Ingrese su Contraseña" 
            />       
            <button id="btnLogin" 
            onClick={validateUser}>Iniciar Sesión</button>
            {/* <Link to="/dashBoard">Ir a Dashboard</Link> */}
        </div>
    )
}
export default Login