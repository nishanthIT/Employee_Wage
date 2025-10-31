
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
        return Math.floor(Math.random()*3)
    }

    function calculateDailyWage(){
        const attendance = checkAttendance();
        console.log(attendance)
        let hoursWorked = 0

        switch(attendance){
            case ABSENT:
                hoursWorked = 0
                console.log(`${name} is ABSENT `)
                break
            case PRESENT:
                hoursWorked = FULL_TIME_HOURS;
                console.log(`${name} is PRESENT today (FUll Time)`)
                break
            case PART_TIME:
                hoursWorked= PART_TIME_HOURS;
                console.log(`${name} is PRESENT  today (PART tiME)`) 
                break
        }
        const dailyWage = hoursWorked * hourlyRate;
        console.log(`Hours worked: ${hoursWorked},Daily wage: ${dailyWage}`)
        return {hoursWorked,dailyWage};
    }

        function calculateMonthlyWage(workingDays = 20) {
        console.log(`\n--- Calculating monthly wage for ${name} ---`);
        totalWorkingDays = 0;
        totalWorkingHours = 0;
        totalWage = 0;

        for (let day = 1; day <= workingDays; day++) {
            console.log(`\nDay ${day}:`);
            const { hoursWorked, dailyWage } = calculateDailyWage();
            if (hoursWorked > 0) totalWorkingDays++;
            totalWorkingHours += hoursWorked;
            totalWage += dailyWage;
        }

        console.log(`\n--- Monthly Summary for ${name} ---`);
        console.log(`Total Working Days: ${totalWorkingDays}`);
        console.log(`Total Working Hours: ${totalWorkingHours}`);
        console.log(`Total Monthly Wage: $${totalWage}`);

        return { totalWorkingDays, totalWorkingHours, totalWage };
    }
    
    
    return{
        calculateDailyWage,
        calculateMonthlyWage
    }

}

export default createEmployee;
