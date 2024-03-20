import { useAuth0 } from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UserNameMenu = () => {
    const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center text-white px-3 font-bold gap-2">
            <CircleUserRound className="text-white" />
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link 
                to="/user-profile" 
                className="font-bold hover:text-red-500"
                >
                    Tu perfil
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link 
                to="/manage-restaurant" 
                className="font-bold hover:text-red-500"
                >
                    Tu restaurant
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick={()=> logout()} 
                className="flex flex-1 font-bold bg-red-500">
                    Cerrar sesión
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNameMenu;