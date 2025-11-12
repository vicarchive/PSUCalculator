import mongoose from "mongoose";

const WeaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No weapon name specified."],
        unique: true
    },
    type: {
        type: { enum: ['Sword', 'Knuckles', 'Spear', 'Double Sabers', 'Axe', 'Twin Sabers', 'Twin Daggers', 'Twin Claws', 'Rifle', 'Shotgun', 'Longbow', 'Grenade', 'Laser Cannon', 'Twin Handguns', 'Rod', 'Saber', 'Dagger', 'Claw', 'Whip', 'Slicer', 'Handgun', 'Crossbow', 'RCSM', 'Machinegun', 'Card', 'Wand', 'TCSM'] },
        required: [true, "No weapon type specified."]
    },
    rarity: {
        type: Number,
        min: 1,
        max: 15,
        required: [true, "No weapon rarity specified."]
    }
});

const Weapon = mongoose.Model("Weapon", WeaponSchema, 'data');
export default Weapon;