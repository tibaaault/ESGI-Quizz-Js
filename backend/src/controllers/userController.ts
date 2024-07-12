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
