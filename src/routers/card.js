// src/routes/card.js

import express from 'express';
import Card from '../db/models/card.js';
import Column from '../db/models/column.js';

const cardRoutes = express.Router();

// Створення нової картки в конкретній колонці
cardRoutes.post('/cards', async (req, res) => {
    try {
        const { columnId, title, description } = req.body;
        const newCard = new Card({ title, description, column: columnId });
        await newCard.save();

        await Column.findByIdAndUpdate(columnId, { $push: { cards: newCard._id } });

        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default cardRoutes;
