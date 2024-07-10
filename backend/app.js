const express = require("express");
const cors = require('cors');
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

// Autorise toutes les origines
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend of your ESGI Quizz!");
});

// Route pour créer un utilisateur
app.post("/users", async (req, res) => {
  const { name, password, role } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, password, role },
    });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour obtenir tous les quiz
app.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await prisma.quizz.findMany();
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour créer un quiz
app.post("/quiz", async (req, res) => {
  const data = req.body;
  try {
    const quiz = await prisma.quizz.create({ data });
    res.json(quiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour obtenir un quiz
app.get("/quiz/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const quiz = await prisma.quizz.findUnique({
      where: { 
        id: id
      }
    });
      res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour obtenir les quizz d'une catégorie
app.get("/category/:categoryId", async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  try {
    const quizzes = await prisma.quizz.findMany({ 
      where: { 
        categoryId : categoryId 
      } 
    });
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route pour obtenir toutes les catégories
app.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour créer une catégorie
app.post("/categories", async (req, res) => {
  const { libelle } = req.body;
  try {
    const category = await prisma.category.create({ data: { libelle } });
    res.json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Route pour obtenir les questions d'un quiz et ses réponses
app.get("/quiz/:quizId/questions", async (req, res) => {
  const quizId = parseInt(req.params.quizId);
  try {
    const questions = await prisma.question.findMany({
      where: { quizzId: quizId },
      include: {
        answers: true,
      },
    });
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour créer une question
app.post("/questions", async (req, res) => {
  const { content, quiz } = req.body;
  try {
    const question = await prisma.question.create({ data: { content, quiz } });
    res.json(question);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route pour créer une réponse
app.post("/answers", async (req, res) => {
  const { content, question } = req.body;
  try {
    const answer = await prisma.answer.create({ data: { content, question } });
    res.json(answer);
  } catch (error) {
    console.error('Error creating answer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour obtenir toutes les statistiques
app.get("/stats", async (req, res) => {
  try {
    const stats = await prisma.stats.findMany();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour créer des statistiques
app.post("/stats", async (req, res) => {
  const { date, time, result, userId, quizzId } = req.body;
  try {
    const stat = await prisma.stats.create({
      data: {
        date: new Date(date),
        time: time,
        result: result,
        userId: userId,
        quizzId: quizzId
      }
    });
    res.json(stat);
  } catch (error) {
    console.error('Error saving quiz result:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Route pour obtenir les statistiques d'un utilisateur pour un quiz spécifique
app.get('/stats/user/:userId/quiz/:quizId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const quizId = parseInt(req.params.quizId);

  try {
    // Requête à la base de données pour récupérer les statistiques
    const stats = await prisma.stats.findMany({
      where: {
        userId: userId,
        quizzId: quizId,
      },
    });

    // Envoie les statistiques sous forme de réponse JSON
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route pour obtenir les statistiques d'un utilisateur pour une catégorie
app.get("/stats/user/:userId/category/:categoryId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const categoryId = parseInt(req.params.categoryId);
  try {
    const stats = await prisma.stats.findMany({ where: { user: userId, category: categoryId } });
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route pour obtenir les statistiques par utilisateur, catégorie et quiz
app.get("/stats/user/:userId/category/:categoryId/quiz/:quizId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const categoryId = parseInt(req.params.categoryId);
  const quizId = parseInt(req.params.quizId);
  try {
    const stats = await prisma.stats.findMany({ where: { user: userId, category: categoryId, quiz: quizId } });
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
