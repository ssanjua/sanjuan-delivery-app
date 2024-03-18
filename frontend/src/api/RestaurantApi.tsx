import { RestaurantSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL= import.meta.env.VITE_API_BASE_URL

export const useSearchRestaurants = (city?: string) => {
    const createSearchRequest = async() : Promise<RestaurantSearchResponse> => {
        const response = await fetch(
            `${API_BASE_URL}/api/restaurant/search/${city}`
        )
        if (!response.ok) {
            throw new Error("falla al buscar restaurante")
        }

        return response.json()
    }

    const { data: results, isLoading } = useQuery(
        ["searchRestaurant"],
        createSearchRequest,
        { enabled: !! city }
    )

    return {
        results,
        isLoading,
    }

    
} 