import mongoose from "mongoose";
import multiplier from "./multiplier.js";

const EnemySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No enemy name specified."]
    },
    level: {
        type: Number,
        min: 1,
        max: 250,
        required: [true, "No enemy level specified."]
    },
    hpModifier: {
        type: Number,
        min: 50,
        max: 2000,
        default: 100
    },
    buff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EnemyMultiplier'
    }
});

const Enemy = mongoose.Model("Enemy", EnemySchema, 'data');
export default Enemy;