import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Obtenir les statistiques d'un utilisateur par son ID pour un quiz
export async function getStatsQuizByUserId(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);
  const quizId = parseInt(req.params.quizId);
  try {
    const stats = await prisma.stats.findMany({
      where: {
        userId,
        quizzId: quizId,
      },
    });

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Obtenir les statistiques d'un utilisateur par son ID
export async function getStatsByUserId(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);
  try {
    const stats = await prisma.stats.findMany({
      where: { userId },
    });

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Route pour obtenir les statistiques d'un utilisateur pour une catégorie spécifique
export async function getStatsByCategory(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);
  const categoryId = parseInt(req.params.categoryId);

  try {
    const quizzIdsInCategory = await prisma.quizz
      .findMany({
        where: { categoryId },
      })
      .then((quizzes) => quizzes.map((quiz) => quiz.id));

    const stats = await prisma.stats.findMany({
      where: {
        userId,
        quizzId: { in: quizzIdsInCategory },
      },
    });

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
