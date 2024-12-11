import express from "express";
import {
  getMissions,
  addMission,
  deleteMission,
} from "../controllers/missionController";
import { authenticateToken } from "../middlewares/authMiddleware";
import { Router } from "express";
import { getUsers } from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/users", getUsers);

export default userRoutes;


const router = express.Router();

router.get("/", getMissions);
router.post("/", authenticateToken, addMission);
router.delete("/:id", authenticateToken, deleteMission);

export default router;

// src/server.ts
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import missionRoutes from "./routes/missionRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/missoes", missionRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
