import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";


type Props = {
  restaurant: Restaurant
  cartItems: CartItem[]
  removeFromCart: (CartItem: CartItem) => void
}

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
    const getTotalCost = () => {
        const totalInPence = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        )
        const totalWithDelivery = totalInPence + restaurant.deliveryPrice

        return (totalWithDelivery / 100).toFixed(2)
    }

  return (
    <>
        <CardContent className="flex flex-col gap-5 mt-5">
            {cartItems.map((item) => (
                <div className="flex justify-between">
                    <span>
                        <Badge variant="outline" className="mr-2">
                            {item.quantity}
                        </Badge>
                        {item.name}
                    </span>
                    <span className="flex items-center gap-1">
                        <Trash 
                            className="cursor-pointer"
                            color="red"
                            size={20}
                            onClick={() => removeFromCart(item)}
                        />
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                </div>
            ))}

            <div className="flex justify-between">
                <span>Delivery</span>
                <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
            </div>
            <Separator />
            <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
                <span>Total</span>
                <span>${getTotalCost()}</span>
            </CardTitle>
            <Separator />
        </CardContent>
    </>
  )
}

export default OrderSummary;