// src/models/column.js

import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ],
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    }
}, {
    timestamps: true
});

const Column = mongoose.model('Column', columnSchema);
export default Column;
