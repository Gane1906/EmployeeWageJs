console.log("Welcome to the Employee Wage Problem using JS");

const IS_PRESENT = 1;
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const FULL_TIME_HRS=8;
const PART_TIME_HRS=4;
const WAGE_PER_HR=20;
const NO_OF_DAYS=20;
const MAX_HRS=100;
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
var empHrs=0;
for(var day=1;day<=NO_OF_DAYS&&empHrs<MAX_HRS;day++){
    var empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=workingHours(empCheck)
}
var wage=WAGE_PER_HR*empHrs;
console.log("No of hours an employee worked in a month is: "+empHrs);
console.log("Monthly wage of an Employee is: "+wage);