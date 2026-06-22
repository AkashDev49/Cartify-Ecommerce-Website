import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cloudinary from "cloudinary";
import cors from "cors";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();
cloudinary.v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECERT_KEY,
});

<<<<<<< HEAD
const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(
	cors({
		origin: process.env.Frontend_URL,
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);
=======
app.use(cors());
const app = express();
app.use(cors({
  origin: 'https://cartify-ecommerce-kappa.vercel.app', // exact Vercel URL
  credentials: true  // agar cookies/auth use kar rahe ho
}));


const port = process.env.PORT ;
>>>>>>> 9ed3c86e0f59cdc2c93da8687bd1c4267607cba8

// Routes
import UserRouter from "./routes/UserRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
import CartRouter from "./routes/CartRouter.js";
import AddressRouter from "./routes/AddressRouter.js";
import OrderRouter from "./routes/OrderRouter.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UserRouter);
app.use("/api", ProductRouter);
app.use("/api", CartRouter);
app.use("/api", AddressRouter);
app.use("/api", OrderRouter);

app.get("/", (req, res) => {
	res.send("WOrking Fine");
});

app.listen(port, () => {
	console.log(`server running on port ${port}`);
	connectDB();
});
