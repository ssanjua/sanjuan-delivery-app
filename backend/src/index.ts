import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("connected to database :)"))

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "health ok"})
})

app.use("/api/my/user", myUserRoute)
app.use("/api/my/restaurant", myRestaurantRoute)

app.listen(3000, () => {
    console.log("server started on localhost: 3000")
});