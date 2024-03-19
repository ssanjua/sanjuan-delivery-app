import Stripe from "stripe";
import { Request, Response } from "express"
import Restaurant, { MenuItemType } from "../models/restaurant";

const STRIPE = new Stripe(process.env.STRIPE_API_KEY as string)
const FRONTEND_URL = process.env.FRONTEND_URL as string

type CheckoutSessionRequest = {
    cartItems: {
      menuItemId: string;
      name: string;
      quantity: string;
    }[];
    deliveryDetails: {
      email: string;
      name: string;
      addressLine1: string;
      city: string;
    };
    restaurantId: string;
  };

const createCheckoutSession = async (req: Request, res: Response) => {
    try {
        const checkoutSessionRequest: CheckoutSessionRequest = req.body;
    
        const restaurant = await Restaurant.findById(
          checkoutSessionRequest.restaurantId
        );
    
        if (!restaurant) {
          throw new Error("restaurante no encontrado");
        }
    
        const lineItems = createLineItems(
          checkoutSessionRequest,
          restaurant.menuItems
        );

        const session = await cerateSession(
            lineItems, 
            "TEST_ORDER_ID", 
            restaurant.deliveryPrice, 
            restaurant._id.toString(),
        )

        if(!session.url) {
            return res.status(500).json({ message: "error creando la sesión de stripe" })
        }

        res.json({ url: session.url })
      } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.raw.message });
      }
};

const createLineItems = (
    checkoutSessionRequest: CheckoutSessionRequest,
    menuItems: MenuItemType[]
    ) => {
    const lineItems = checkoutSessionRequest.cartItems.map((cartItem) => {
        const menuItem = menuItems.find(
        (item) => item._id.toString() === cartItem.menuItemId.toString()
        );
    
        if (!menuItem) {
        throw new Error(`no se encuentra el: ${cartItem.menuItemId}`)
        }
    
        const line_item: Stripe.Checkout.SessionCreateParams.LineItem = {
        price_data: {
            currency: "usd",
            unit_amount: menuItem.price,
            product_data: {
            name: menuItem.name,
            },
        },
        quantity: parseInt(cartItem.quantity),
        };
    
        return line_item
    });
    
    return lineItems
};

const cerateSession = async (
    lineItems: Stripe.Checkout.SessionCreateParams.LineItem[],
    orderId: string,
    deliveryPrice: number,
    restauranId: string
    ) => {
        const sessionData = await STRIPE.checkout.sessions.create({
            line_items: lineItems,
            shipping_options: [
                {
                    shipping_rate_data: {
                        display_name: "Delivery",
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: deliveryPrice,
                            currency: "usd",
                        }
                    }
                }
            ],
            mode: "payment",
            metadata: {
                orderId,
                restauranId,
            },
            success_url: `${FRONTEND_URL}/order-status?success=true}`,
            cancel_url: `${FRONTEND_URL}/detail/${restauranId}?cancelled=true`,
        })

        return sessionData
}

export default {
    createCheckoutSession,
}