import { Request, Response } from 'express';
import prisma from '../db/prisma';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tasks' });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, color }: { title: string; color: string } = req.body;
  try {
    const newTask = await prisma.tasks.create({
      data: { title, color },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a task' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { completed }: { completed: boolean } = req.body;
  try {
    const updatedTask = await prisma.tasks.update({
      where: { id: Number(id) },
      data: { completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the task' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.tasks.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the task' });
  }
};
