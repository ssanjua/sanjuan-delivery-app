import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";


const FeaturesCard = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search/capital');
    };


    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="max-w-[300px] w-full md:w-1/3 bg-white rounded-lg shadow-md w-full md:w-1/3 overflow-hidden">
                    <img src="gestion.jpeg" className="w-full h-40 object-cover" />
                    <div className="p-6 text-center">
                        <h2 className="font-bold text-xl mb-2 text-red-500">
                            Registra tu negocio
                        </h2>
                        <p className="text-gray-700 text-base mb-4">
                            Porque confiamos en lo local, queremos ayudarte a que todos puedan conocer la mágia de tu cocina. No te quedes afuera y crecé con nosotros.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={async () => await loginWithRedirect()}
                                className="rounded-full bg-red-500 hover:bg-red-700 w-40">
                                Registrarse
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[300px] w-full bg-white rounded-lg shadow-md w-full md:w-1/3 overflow-hidden">
                    <img src="banquete.jpeg" className="w-full h-40 object-cover" />
                    <div className="p-6 text-center">
                        <h2 className="font-bold text-xl mb-2 text-red-500">
                            Comprá lo que quieras
                        </h2>
                        <p className="text-gray-700 text-base mb-4">
                            Tenemos para todos los gustos y bolsillos. Desde almacenes de barrio hasta los restaurantes más top de la provincia.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={handleClick}
                                className="rounded-full bg-red-500 hover:bg-red-700 w-40">
                                Pedir
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[300px] w-full md:w-1/3 bg-white rounded-lg shadow-md w-full md:w-1/3 overflow-hidden">
                    <img src="hero3.png" className="w-full h-40 object-cover" />
                    <div className="p-6 text-center">
                        <h2 className="font-bold text-xl mb-2 text-red-500">
                            Unite al equipo
                        </h2>
                        <p className="text-gray-700 text-base mb-4">
                            Queremos crecer todos juntos, la mejos manera es trabajando en equipo. Hagamos crecer la Provincia.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={handleClick}
                                className="rounded-full bg-red-500 hover:bg-red-700 w-40">
                                Unite!
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturesCard;