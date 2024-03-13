import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
        {  isAuthenticated ? ( 
            <UserNameMenu /> 
        ) : (            
            <Button 
            variant="ghost" 
            className="font-bold hover:text-orange-500 hover-bg-white"
            onClick={async () => await loginWithRedirect()}
        >
            Iniciar sesión
        </Button>
        )}
    </span>
    
  )
}

export default MainNav;