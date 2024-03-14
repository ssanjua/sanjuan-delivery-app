import mongoose from "mongoose"

const menuItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
})

const restaurantSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    restaurantName: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    deliveryPrice: { type: Number, required: true },
    estimatedDeliveryTime: { type: Number, required: true },
    cousines: [{ type: String, required: true }],
    menuItems: [menuItemsSchema],
    imageUrl: { type: String, required: true },
    lastUpdated: { type: Date, required: true },
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;