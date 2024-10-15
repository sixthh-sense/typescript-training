import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GoflCoach";
import {Coach} from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches(initially empty)
let coaches: Coach[] = [];

coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let tempCoach of coaches) {
    console.log(tempCoach.getDailyWorkout());
}