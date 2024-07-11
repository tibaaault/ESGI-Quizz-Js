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

// Route  enregistrer les résultats du quiz
export async function submitQuizAndSaveResult(req: Request, res: Response) {
  const { answers, result, date, time, userId, quizzId } = req.body;
  try {
    const newResult = await prisma.stats.create({
      data: {
        date: new Date(date),
        time,
        result,
        user: { connect: { id: userId } },
        quizz: { connect: { id: quizzId } },
      },
    });
    res.json(newResult);
  } catch (error) {
    console.error("Error submitting quiz and saving result:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Calculer et mettre à jour le taux de réussite d'un utilisateur
export async function updateSuccessRate(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);

  try {
    const stats = await prisma.stats.findMany({
      where: { userId },
    });

    const total = stats.length;
    const totalSuccess = stats.filter((stat) => stat.result === 1).length;
    const successRate = total > 0 ? (totalSuccess / total) * 100 : 0;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { successRate },
    });

    res.json({
      message: `Le taux de réussite de l'utilisateur avec l'ID ${userId} a été mis à jour.`,
      successRate: successRate,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating success rate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Endpoint pour récupérer les statistiques d'un utilisateur
export async function getStats(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);

  try {
    const stats = await prisma.stats.findMany({
      where: { userId },
    });

    const totalQuizzes = stats.length;
    const totalSuccess = stats.filter((stat) => stat.result === 1).length;
    const successRate = totalQuizzes > 0 ? (totalSuccess / totalQuizzes) * 100 : 0;

    res.json({
      successRate: successRate,
      totalQuizzes: totalQuizzes,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
