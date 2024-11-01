// src/models/card.js

import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    column: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Column',
        required: true
    }
}, {
    timestamps: true
});

const Card = mongoose.model('Card', cardSchema);
export default Card;
