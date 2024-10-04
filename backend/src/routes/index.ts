//Then import the auth routes in the main routes/index.ts file.
import { Router, Request, Response } from "express";
import authRoutes from "./auth";
import { calculate } from "../controller/calcController";

const router = Router();

router.get("/api/v1", (req: Request, res: Response) => {
  res.send("Hello Dev Community!");
});

//? Import other routes here

router.use("/api/v1/auth", authRoutes);
//* eg: router.use("/api/v1/user", userRoutes);

//calculate route
router.post('/calc', calculate);

export default router;
