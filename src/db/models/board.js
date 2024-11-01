// src/models/board.js

import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    columns: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Column'
        }
    ]
}, {
    timestamps: true
});

const Board = mongoose.model('Board', boardSchema);
export default Board;
