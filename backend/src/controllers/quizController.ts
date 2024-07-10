import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuiz(req: Request, res: Response) {
  const data: Prisma.QuizzCreateInput = req.body;
  try {
    const quiz = await prisma.quizz.create({ data });
    res.json(quiz);
  } catch (error) {
    console.error("Error creating quiz:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getQuizById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const quiz = await prisma.quizz.findUnique({
      where: { id },
    });
    res.json(quiz);
  } catch (error) {
    console.error("Error fetching quiz:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function findMany(req: Request, res: Response) {
  try {
    const quizzes = await prisma.quizz.findMany();
    res.json(quizzes);
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function findQuizzesByCategory(req: Request, res: Response) {
  const categoryId = parseInt(req.params.categoryId);
  try {
    const quizzes = await prisma.quizz.findMany({
      where: { categoryId },
    });
    res.json(quizzes);
  } catch (error) {
    console.error("Error fetching quizzes by category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Obtenir les questions et réponses d'un quiz par son ID
export async function getQuestionsByQuizId(req: Request, res: Response) {
  const quizId = parseInt(req.params.quizId, 10);
  try {
    const questions = await prisma.question.findMany({
      where: {
        quizzId: quizId, // Assurez-vous que 'quizId' est le bon champ dans votre modèle Prisma
      },
      include: {
        answers: true,
      },
    });
    if (!questions.length) {
      return res.status(404).json({ message: 'Questions not found' });
    }
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}

//Créer une question
export async function createQuestion(req: Request, res: Response) {
  const data: Prisma.QuestionCreateInput = req.body;
  try {
    const question = await prisma.question.create({ data });
    res.json(question);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//Créer une réponse
export async function createAnswer(req: Request, res: Response) {
  const data: Prisma.AnswerCreateInput = req.body;
  try {
    const answer = await prisma.answer.create({ data });
    res.json(answer);
  } catch (error) {
    console.error("Error creating answer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


