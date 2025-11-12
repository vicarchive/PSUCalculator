import express from "express";
import cors from "cors";
import service from "./services.js";

const app = express();
const port = 8000;
app.use(corse());
app.use(express.json());

/* There may be more than 1 layout to a level, but I'm unsure. Coding these as if there is only 1. */
/* Assuming all items have percent drops. */

/* ACCESS POINTS */
/*
X Goal - Enemy
*/
app.get("/goal/enemy", async (req, res) => {
    
});
/*
X Goal - Item
*/
app.get("/goal/item", async (req, res) => {

});

/*
X Goal - EXP
*/
app.get("/goal/exp", async (req, res) => {

});

/*
X Goal - Level
*/
app.get("/goal/lvl", async (req, res) => {

});

/*
X Run - Enemy
*/
app.get("/run/enemy", async (req, res) => {

});

/*
X Run - Item
*/
app.get("/run/item", async (req, res) => {

});

/*
X Run - EXP
*/
ap.get("/run/exp", async (req, res) => {

});

/* X GOAL */
/*
Goes through every mission that has at least one of the specified enemy and finds how many runs of each will get to the goal.
*/
function calculateRunEnemyGoal(missionName, difficulty, enemyName, goal) {

}

/*
Calculates how many runs required until a theoretical 100% can be achieved. Rounded to the nearest whole number.
*/
function calculatePercentageForDrop(missionName, difficulty, itemName) {
    //This can be used for weapons too, same fields
}

/*
Calculates how many times to run a mission with a specified difficulty until reaching a certain amount of EXP.
*/
function calculateMissionEXP(missionName, difficulty, goal) {

}

/*
Gets the EXP required from fromLevel to toLevel. If null, sets currTotalEXP to 0, then adds currTotalEXP.
~This function should be defined in the DB side so as to not call for hundreds of similar queries.
*/
function calculateEXPToLevel(toLevel, fromLevel, currTotalEXP) {
    // can use either fromlevel or currtotal. dont need both at the same time
}

/* X RUNS */
/*
Goes through the specified fields and adds up the amount of enemies defeated.
*/
function sumEnemies(missionName, difficulty, times) {

}

/*
Goes through the specified fields and adds up the percentages of the items that theoretically drop.
*/
function sumItemPercentages(missionName, difficulty, times) {

}

/*
Goes through the specified fields and adds up the EXP gained.
*/
function sumEXP(missionName, difficulty, times) {

}