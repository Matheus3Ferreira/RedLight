import { Router } from "express";
import BillController from "./modules/bills/controllers/BillController";
import BookingController from "./modules/bookings/controllers/BookingController";
import { GuestController } from "./modules/guests/controllers/GuestController";
import { OrderController } from "./modules/orders/controllers/OrderController";
import ProductController from "./modules/products/controllers/ProductController";
import { RoomController } from "./modules/rooms/controllers/RoomController";

const routes = Router();
const Guest = new GuestController();
const Booking = new BookingController();
const Bill = new BillController();
const Product = new ProductController();
const Order = new OrderController();
const Room = new RoomController();

routes.post("/guest", Guest.create);
routes.post("/bill", Bill.create);
routes.patch("/bill/close", Bill.close);
routes.get("/product", Product.findOne);
routes.post("/order", Order.create);
routes.post("/booking", Booking.create);
routes.get("/booking", Booking.list);
routes.get("/room", Room.list);
routes.post("/room", Room.create);
routes.get("/available/rooms", Booking.getAvailableRooms);

export default routes;
