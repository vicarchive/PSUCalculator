import mongoose from "mongoose";
// Weapons behave like items but have a separate schema.

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No item name specified."],
        unique: true
    },
    type: { // Probably using this for accurate image generation. See PSU menus
        type: { enum: ['Line Shield', 'Head Unit', 'Arm Unit', 'Body Unit', 'Other Unit', 'Consumable', 'Boost', 'Grinder', 'Synthesis'] },
        required: [true, "No item type specified."]
    },
    rarity: {
        type: Number,
        min: 1,
        max: 15,
        required: [true, "No item rarity specified."]
    }
});

const Item = mongoose.Model("Item", ItemSchema, 'data');
export default Item;