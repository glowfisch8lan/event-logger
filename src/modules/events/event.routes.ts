import {Router} from "express";

import eventController from "../../modules/events/controllers/event.controller";

const router = Router();

router.get("/list", eventController.list);

export default router;

