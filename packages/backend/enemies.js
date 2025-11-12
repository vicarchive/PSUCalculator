import mongoose from "mongoose";
import enemy from "./enemy.js";
import mission from "./mission.js";

const EnemyCountSchema = new mongoose.Schema({
    mission: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "No mission specified."]
    },
    enemy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "No enemy specified."]
    },
    count: {
        type: Number,
        min: 1,
        required: [true, "No enemy count specified."]
    }
});

const EnemyCount = mongoose.Model("EnemyCount", EnemyCountSchema, 'data');
export default EnemyCount;