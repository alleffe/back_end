import { Request, Response } from "express";
import { User } from "../models/userModel";
import AppDataSource from "../config/database";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
