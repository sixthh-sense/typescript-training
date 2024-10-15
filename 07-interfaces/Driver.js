"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GoflCoach_1 = require("./GoflCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GoflCoach_1.GolfCoach();
// declare an array for coaches(initially empty)
let coaches = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);
for (let tempCoach of coaches) {
    console.log(tempCoach.getDailyWorkout());
}
