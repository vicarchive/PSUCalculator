import mongoose from "mongoose";

const EnemyLevelSchema = new mongoose.Schema({
	level: {
		type: Number,
		min: 1,
		max: 250,
		required: [true, "No enemy level specified."]
	},
	baseEXP: {
		type: Number,
		required: [true, "No base exp specified."]
	}
});

const EnemyLevel = mongoose.Model("EnemyLevel", EnemyLevelSchema, 'data');
export default EnemyLevel;