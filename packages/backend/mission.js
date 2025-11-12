import mongoose from "mongoose";
import fields from "./region.js";

const MissionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "No mission name specified."]
	},
	difficulty: {
		type: { enum: ['C', 'B', 'A', 'S', 'S2', 'S3', 'S4', 'U'] },
		required: [true, "No difficulty specified."]
	},
	minlvl: {
		type: int,
		required: [true, "No minimum level specified."]
	},
	field: {
		type: mongoose.Schema.Types.Mixed, // Field names can populate their home planet since they are unique ?
		required: [true, "No field of origin specified."]
	},
	drops: {
		type: [String] // Array of weapon and item names, since they are unique from each other. Set as _id?
	}
});

const Mission = mongoose.Model("Mission", MissionSchema, 'data');
export default Mission;