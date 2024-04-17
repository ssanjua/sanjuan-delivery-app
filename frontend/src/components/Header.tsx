import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="bg-red-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div><Link 
            to="/"
            className="text-2xl font-bold text-white"
            >
                yarcoDelivery.com 🌵
            </Link>
            <p className="text-gray-100">Pedí lo que quieras, estés dónde estés</p>
            </div>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header;