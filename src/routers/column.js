// src/routes/column.js

import express from 'express';
import Column from '../db/models/column.js';
import Board from '../db/models/board.js';

const columnRoutes = express.Router();

// Створення нової колонки в конкретній дошці
columnRoutes.post('/columns', async (req, res) => {
    try {
        const { boardId, name } = req.body;
        const newColumn = new Column({ name, board: boardId });
        await newColumn.save();

        await Board.findByIdAndUpdate(boardId, { $push: { columns: newColumn._id } });

        res.status(201).json(newColumn);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default columnRoutes;
