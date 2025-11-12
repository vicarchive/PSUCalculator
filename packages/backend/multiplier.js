import mongoose from "mongoose";

const EnemyMultiplierSchema = new mongoose.Schema({
    buffId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "No id specified."],
        unique: true
    },
    buffs: {
        type: [{ enum: ['Attack', 'Defense', 'TECHNIC', 'Speed', 'Leader'] }],
        required: [true, "No buffs specified."],
        unique: true
    },
    percentage: {
        type: mongoose.Schema.Types.Double,
        min: 1.00,
        max: 2.16,
        required: [true, "No multiplier specified."]
    }
});

const EnemyMultiplier = mongoose.Model("EnemyMultiplier", EnemyMultiplierSchema, 'data');
export default EnemyMultiplier;