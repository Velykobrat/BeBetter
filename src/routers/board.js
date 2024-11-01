// src/routes/board.js

import express from 'express';
import Board from '../db/models/board.js';

const boardRoutes = express.Router();

// Створення нової дошки
boardRoutes.post('/boards', async (req, res) => {
    try {
        const newBoard = new Board({ name: req.body.name });
        await newBoard.save();
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Отримання всіх дощок
boardRoutes.get('/boards', async (req, res) => {
    try {
        const boards = await Board.find().populate('columns');
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default boardRoutes;
