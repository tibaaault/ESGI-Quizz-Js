// src/controllers/authController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../middleware/authenticateToken';
import { generateToken } from '../utils/jwtUtils';

const prisma = new PrismaClient();

export async function loginUser(req: Request, res: Response) {
  const { name, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: { name: name },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken({ userId: user.id });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Login failed' });
  }
}

export function logoutUser(req: Request, res: Response) {
  res.status(200).json({ message: 'Logout successful' });
}

export async function registerUser(req: Request, res: Response) {
  const { name, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: { name: name },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        password: hashedPassword,
        role: 'USER',
      },
    });

    const token = generateToken({ userId: newUser.id });

    return res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Registration failed' });
  }
}

