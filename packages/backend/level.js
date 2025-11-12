import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema({
    level: {
        type: Number,
        min: 1,
        max: 200,
        required: [true, "No level specified."]
    },
    exp: {
        type: Number,
        required: [true, "No experience specified."]
    }
});

const Level = mongoose.Model("Level", LevelSchema, 'data');
export default Level;