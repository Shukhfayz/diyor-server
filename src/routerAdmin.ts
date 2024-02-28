import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.getHome);
routerAdmin.get("/login", restaurantController.getHome);
routerAdmin.get("/singup", restaurantController.getHome);

export default routerAdmin;
