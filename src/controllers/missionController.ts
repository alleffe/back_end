import { Request, Response } from 'express';
import { Mission } from '../models/missionModel';
import { AppDataSource } from '../config/database';

const missionRepository = AppDataSource.getRepository(Mission);

export const getMissions = async (req: Request, res: Response) => {
  const missions = await missionRepository.find();
  return res.json(missions);
};

export const addMission = async (req: Request, res: Response) => {
  try {
    const mission = missionRepository.create(req.body);
    await missionRepository.save(mission);
    return res.status(201).json(mission);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteMission = async (req: Request, res: Response) => {
  try {
    const result = await missionRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'Mission not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    (req as any).user = user;
    next();
  });
};
