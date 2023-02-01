import { Router } from "express";
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
routes.patch("/bill/close", Bill.close);
routes.get("/product", Product.findOne);
routes.post("/order", Order.create);
routes.post("/booking", Booking.create);

export default routes;
