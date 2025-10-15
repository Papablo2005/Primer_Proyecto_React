import { useLocation } from "react-router"
function Dashboard(){
    const location = useLocation();
    const { nombreUsuario } = location.state;
    return(
        <div>
            <h1>Bienvenido {nombreUsuario.campo}</h1>
        </div>
    )
}
export default Dashboard