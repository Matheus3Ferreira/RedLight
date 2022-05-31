import { Request, Response, Router } from "express";
import { listGuestsController } from "./controller/listGuestsController";
import { saveGuestController } from "./controller/saveGuestController";

const routes = Router();

routes.get('/guests', listGuestsController);
routes.post('/guest', saveGuestController);

export default routes;