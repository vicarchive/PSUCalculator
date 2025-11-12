import Mongoose from "mongoose";

import EnemyCount from "./enemies.js";
import Enemy from "./enemy.js";
import EnemyLevel from "./enemylevel.js";
import Item from "./item.js";
import Level from "./level.js";
import Mission from "./mission.js";
import Multiplier from "./multiplier.js";
import Region from "./region.js";
import Weapon from "./weapon.js";

await Mongoose.connect("mongodb://localhost:27017/data", {}).catch((error) => console.log(error));

/*
Returns a promise with that mission, at that difficulty, and number of the enemy specified.
~ Mission name not specified: returns all missions of that difficulty with that enemy included and how many.
~ Difficulty not specified: returns all difficulties of the specified mission and how many of the enemy they have.
~ Enemy name not specified: returns all enemy counts of the specified mission and difficulty.
Every field can be left blank.
*/
function enemiesInMission(missionName, difficulty, enemy) {

}

/*
Returns a promise with the missions containing that item. Includes weapons and other item types (anything that can be picked up).
*/
function findItem(missionName, difficulty, itemName) {

}

/*
Returns a promise with the EXP required to get to a specific level from a base level.
~ Done here for the $sum operator. Easier than querying the database hundreds of times.
*/
function getEXPToNextLvl(startLVL, endLVL) {

}

/*
Returns a promise with the EXP given in the mission based on the enemies and their buffs + HP boost.
Both parameters must be specified.
*/
function missionEXP(missionName, difficulty) {
    // use enemiesInMission without enemy name
}