import { response, Router } from "express";
import BillController from "./modules/bills/controllers/BillController";
import BookingController from "./modules/bookings/controllers/BookingController";
import { GuestController } from "./modules/guests/controllers/GuestController";
import { OrderController } from "./modules/orders/controllers/OrderController";
import ProductController from "./modules/products/controllers/ProductController";

const routes = Router();
const Guest = new GuestController();
const Booking = new BookingController();
const Bill = new BillController();
const Product = new ProductController();
const Order = new OrderController();

routes.post("/guest", Guest.create);
routes.post("/bill", Bill.create);
routes.get("/product", Product.list);
routes.post("/order", Order.create);

export default routes;
