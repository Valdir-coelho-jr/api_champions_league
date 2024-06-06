import { Router } from "express";
import * as PlayerController from "./controllers/players_controller";
import * as ClubsControlller from "./controllers/clubs_controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clubs", ClubsControlller.getClubs);

export default router;
