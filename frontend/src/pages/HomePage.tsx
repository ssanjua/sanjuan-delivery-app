import landingImage from "../assets/landing.webp";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import FeaturesCard from "@/components/FeaturesCard";

const HomePage = () => {
  const navigate = useNavigate()
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`
    })
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="px-4 sm:px-8 md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-red-600">
          Vamos donde estés!
        </h1>
        <span className="text-xl">Estás a un click de la felicidad!</span>
        <SearchBar
          placeHolder="Buscá tu localidad. Ej: Rivadavia o Capital"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-centers pt-4">
          <span className="font-bold text-2xl tracking-tighter">
            Pedí lo que más te gusta!
          </span>
          <span>
            Descargá la app y pedí lo que quieras, cuando quieras, como quieras
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
      <FeaturesCard />
    </div>
  );
};

export default HomePage;