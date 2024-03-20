import { Order, Restaurant } from "@/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

      if(!response.ok) {
          throw new Error("falla al obtener el restaurante")
      }
      return response.json()
    }

    const { data: restaurant, isLoading } = useQuery(
        "fetchMyRestaurant", 
        getMyRestaurantRequest
    )

    return { restaurant, isLoading }
}

export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const createMyRestaurantRequest = async (
      restaurantFormData: FormData
    ): Promise<Restaurant> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: restaurantFormData,
      });
  
      if (!response.ok) {
        throw new Error("falla al crear el restaurante");
      }
  
      return response.json();
    };
  
    const {
      mutate: createRestaurant,
      isLoading,
      isSuccess,
      error,
    } = useMutation(createMyRestaurantRequest);
  
    if (isSuccess) {
      toast.success("Restaurante creado!");
    }
  
    if (error) {
      toast.error("No se pudo crear el restaurante");

    }
  
    return { createRestaurant, isLoading };
  };

  export const useUpdateMyRestaurant = () => {
      const { getAccessTokenSilently } = useAuth0();

      const updatedRestaurantRequest = async (
        restaurantFormData: FormData
        ) : Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently()

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: restaurantFormData,
        })

        if (!response) {
          throw new Error("no se pudo actualizar el restaurante")
        }
        
        return response.json()
      }

      const { 
        mutate: updateRestaurant, 
        isLoading, 
        error, 
        isSuccess
      } = useMutation(updatedRestaurantRequest)

      if(isSuccess) {
        toast.success("Restaurante actualizado!")
      }

      if(error) {
        toast.error("No se pudo actualizar el restaurante")
      }

      return { updateRestaurant, isLoading }
  }

  export const useGetMyRestaurantOrders = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
  
      return response.json();
    };
  
    const { data: orders, isLoading } = useQuery(
      "fetchMyRestaurantOrders",
      getMyRestaurantOrdersRequest
    );
  
    return { orders, isLoading };
  };
  
  type UpdateOrderStatusRequest = {
    orderId: string;
    status: string;
  }

  export const useUpdateMyRestaurantOrder = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const updateMyRestaurantOrder = async (
      updateStatusOrderRequest: UpdateOrderStatusRequest
    ) => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(
        `${API_BASE_URL}/api/my/restaurant/order/${updateStatusOrderRequest.orderId}/status`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: updateStatusOrderRequest.status }),
        }
      );
  
      if (!response.ok) {
        throw new Error("falla al actualizar el estado");
      }
  
      return response.json();
    };
  
    const {
      mutateAsync: updateRestaurantStatus,
      isLoading,
      isError,
      isSuccess,
      reset,
    } = useMutation(updateMyRestaurantOrder);
  
    if (isSuccess) {
      toast.success("Orden actualizada");
    }
  
    if (isError) {
      toast.error("No se pudo actualizar el estado");
      reset();
    }
  
    return { updateRestaurantStatus, isLoading };
  };
