import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectItem } from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";


type Props = {
  order: Order
}

const OrderItemCard = ({ order }: Props) => {

    const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder()
    const [status, setStatus] = useState<OrderStatus>(order.status)

    useEffect(() => {
        setStatus(order.status)
    }, [order.status])

    const handleStatusChange = async (newStatus: OrderStatus) => {
        await updateRestaurantStatus({
          orderId: order._id as string,
          status: newStatus,
        });
        setStatus(newStatus);
      };

    const getTime = () => { 
        const orderDateTime = new Date(order.createdAt);
    
        const hours = orderDateTime.getHours();
        const minutes = orderDateTime.getMinutes();
    
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
        return `${hours}:${paddedMinutes}`;
      };
      
  return (
    <Card>
        <CardHeader>
            <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
                <div>
                    Nombre del cliente:
                    <span className="ml-2 font-normal">
                        {order.deliveryDetails.name}
                    </span>
                </div>
                <div>
                    Dirección:
                    <span className="ml-2 font-normal">
                        {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
                    </span>
                </div>
                <div>
                    Hora:
                    <span className="ml-2 font-normal">
                        {getTime()}
                    </span>
                </div>
                <div>
                    Total:
                    <span className="ml-2 font-normal">
                        ${(order.totalAmount / 100).toFixed(2)}
                    </span>
                </div>
            </CardTitle>
            <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                {order.cartItems.map((cartItem) => (
                    <span>
                        <Badge variant="outline" className="mr-2">
                            {cartItem.quantity}                            
                        </Badge>
                        {cartItem.name}
                    </span>
                ))}
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="status">Estado de la orden</Label>
                <Select
                    value={status}
                    disabled={isLoading}
                    onValueChange={(value) => handleStatusChange(value as OrderStatus)}
                >
                    <SelectTrigger id="status">
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {ORDER_STATUS.map((status)=> (
                            <SelectItem value={status.value}>{status.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
    </Card>
  )
}

export default OrderItemCard;