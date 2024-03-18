import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";


export type SearchState = {
    searchQuery: string;
}

const SearchPage = () => {
    const { city } = useParams();
    const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  })

  const { results, isLoading } = useSearchRestaurants(searchState, city)

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
        ...prevState, 
        searchQuery: searchFormData.searchQuery,
    }))
  }

  const resetSearch = () => {
    setSearchState((prevState) => ({
        ...prevState, 
        searchQuery: "",
    }))
  }
  
  if (isLoading) {
    return <span>Cargando...</span>
  }
  if (!results?.data || !city) {
    return <span>No results found</span>
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div id="cuisines-list">
            insert cuisines here :)
        </div>
        <div id="main-content" className="flex flex-col gap-5">
            <SearchBar 
                searchQuery={searchState.searchQuery}
                onSubmit={setSearchQuery} 
                placeHolder="Buscá la comida que quieras. Por ej: Pastas"
                onReset={resetSearch}
            />
            <SearchResultInfo total={results.pagination.total} city={city} />
            {results.data.map((restaurant) => (
                <SearchResultCard restaurant={restaurant} />
            ))}
        </div>
    </div>
  )
}

export default SearchPage;