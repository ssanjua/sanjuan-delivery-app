import { OrderStatus } from "@/types";

type OrderStatusInfo = {
    label: string;
    value: OrderStatus;
    progressValue: number;
}

export const ORDER_STATUS: OrderStatusInfo[] = [
    { 
        label: "Recibido", 
        value: "placed", 
        progressValue: 0 
    },
    { 
        label: "Esperando confirmación del restaurante", 
        value: "paid", 
        progressValue: 25 
    },
    {
        label: "Confirmado: estamos preparando tu comida", 
        value: "inProgress", 
        progressValue: 50 
    },
    {
        label: "El delivery va a tu casa", 
        value: "outForDelivery", 
        progressValue: 75 
    },
    {
        label: "Delivery realizado", 
        value: "delivered", 
        progressValue: 100 
    },

]