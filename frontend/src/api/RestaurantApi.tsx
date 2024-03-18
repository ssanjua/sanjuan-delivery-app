import { SearchState } from "@/pages/SearchPage"
import { RestaurantSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL= import.meta.env.VITE_API_BASE_URL

export const useSearchRestaurants = (searchState: SearchState, city?: string) => {

    const createSearchRequest = async() : Promise<RestaurantSearchResponse> => {
        const params = new URLSearchParams()
        params.set("searchQuery", searchState.searchQuery)
        params.set("page", searchState.page.toString())
        params.set("selectedCuisines", searchState.selectedCuisines.join(","))
        params.set("sortOption", searchState.sortOption)

        const response = await fetch(
            `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
        )
        if (!response.ok) {
            throw new Error("falla al buscar restaurante")
        }

        return response.json()
    }

    const { data: results, isLoading } = useQuery(
        ["searchRestaurant", searchState],
        createSearchRequest,
        { enabled: !! city }
    )

    return {
        results,
        isLoading,
    }    
} 