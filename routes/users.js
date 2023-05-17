import express from "express";
import { addUser, deleteUser, getUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/api/users", getUsers)

router.get("/api/user/:id", getUser)

router.post("/api/user", addUser)

router.put("/api/user/:id", updateUser)

router.delete("/api/user/:id", deleteUser)

export default router