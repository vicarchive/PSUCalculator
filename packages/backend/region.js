import mongoose from "mongoose";

const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No region name specified."],
        unique: true
    },
    planet: {
        type: {
            enum: ['Colony', 'Parum', 'Neudaiz', 'Moatoob']
        },
        required: [true, "No planet specified."]
    }
});

const Region = new mongoose.Model("Region", RegionSchema, 'data');
export default Region;