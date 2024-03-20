import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
  return (
    <>
        <Link 
        to="/user-profile"
        className="flex bg-white items-center font0bold hover:text-red-500"
        >
            Tu perfil    
        </Link>
        <Link 
        to="/manage-restaurant"
        className="flex bg-white items-center font0bold hover:text-red-500"
        >
            Tu restaurante    
        </Link>
        <Link 
        to="/order-status"
        className="flex bg-white items-center font0bold hover:text-red-500"
        >
            Estado de pedido    
        </Link>
        <Button
        onClick={()=>logout()} 
        className="flex items-center px-3 font-bold hover:bg-gray-500"
        >
            Cerrar sesión
        </Button>
    </>
  )
}

export default MobileNavLinks;