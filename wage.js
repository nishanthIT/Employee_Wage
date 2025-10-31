
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const PRESENT = 1;
const ABSENT = 0;
const PART_TIME = 2;

function createEmployee(id, name, hourlyRate=20){
    let totalWorkingDays = 0;
    let totalWorkingHours = 0;
    let totalWage = 0;

    function checkAttendance(){
        return Math.floor(Math.random()*2)
    }
    
}

