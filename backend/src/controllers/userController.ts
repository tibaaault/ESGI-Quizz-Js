// src/controllers/userController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(req: Request, res: Response) {
  const { name, password, role } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, password, role },
    });
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// export async function getUserProfile(req: Request, res: Response) {
//   try {
//     const userId = req.user.userId; // Utilisation de l'ID de l'utilisateur extrait du token
//     const user = await prisma.user.findUnique({ where: { id: userId } });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// }
