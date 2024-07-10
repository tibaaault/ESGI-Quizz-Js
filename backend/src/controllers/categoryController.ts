import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function findMany(req: Request, res: Response) {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Obtenir une catégorie par son ID
export async function getCategoryById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    res.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



