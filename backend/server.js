import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
//middleware makes it possible to convert req into json
app.use(express.json());

app.use(cors());

//this means when a req is for api/products then go to (productRoutes)
//when they make a crud req with "api/products" path then they will go to productRoutes
//We
app.use("/api/products", productRoutes);

//starts a server and listen for a port
app.listen(PORT, () => {
  //connects to db method from db.js file
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
