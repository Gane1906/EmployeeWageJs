console.log("Welcome to the Employee Wage Problem using JS");

const IS_PRESENT = 1;
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const FULL_TIME_HRS=8;
const PART_TIME_HRS=4;
const WAGE_PER_HR=20;
function workingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        default:
            return 0;
    }
}
var empCheck=Math.floor(Math.random()*10)%3;
var empHrs=workingHours(empCheck);
var dailyWage=WAGE_PER_HR*empHrs;
console.log("Daily wage of an Employee is: "+dailyWage);