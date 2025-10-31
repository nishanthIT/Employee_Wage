
class Employee {
    // Class variables (static)
    static FULL_TIME_HOURS = 8;
    static PART_TIME_HOURS = 4;
    static PRESENT = 1;
    static ABSENT = 0;
    static PART_TIME = 2;

    constructor(id, name, hourlyRate = 20) {
        this.id = id;
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.totalWorkingDays = 0;
        this.totalWorkingHours = 0;
        this.totalWage = 0;
    }

    // Check attendance randomly
    checkAttendance() {
        return Math.floor(Math.random() * 3);
    }

    // Calculate daily wage based on attendance
    calculateDailyWage() {
        const attendance = this.checkAttendance();
        let hoursWorked = 0;

        switch (attendance) {
            case Employee.ABSENT:
                hoursWorked = 0;
                console.log(`${this.name} is ABSENT`);
                break;
            case Employee.PRESENT:
                hoursWorked = Employee.FULL_TIME_HOURS;
                console.log(`${this.name} is PRESENT today (Full Time)`);
                break;
            case Employee.PART_TIME:
                hoursWorked = Employee.PART_TIME_HOURS;
                console.log(`${this.name} is PRESENT today (Part Time)`);
                break;
        }

        const dailyWage = hoursWorked * this.hourlyRate;
        console.log(`Hours worked: ${hoursWorked}, Daily wage: $${dailyWage}`);
        return { hoursWorked, dailyWage };
    }

    // Calculate monthly wage for specified working days
    calculateMonthlyWage(workingDays = 20) {
        console.log(`\n--- Calculating monthly wage for ${this.name} ---`);
        this.totalWorkingDays = 0;
        this.totalWorkingHours = 0;
        this.totalWage = 0;

        for (let day = 1; day <= workingDays; day++) {
            console.log(`\nDay ${day}:`);
            const { hoursWorked, dailyWage } = this.calculateDailyWage();
            if (hoursWorked > 0) this.totalWorkingDays++;
            this.totalWorkingHours += hoursWorked;
            this.totalWage += dailyWage;
        }

        console.log(`\n--- Monthly Summary for ${this.name} ---`);
        console.log(`Total Working Days: ${this.totalWorkingDays}`);
        console.log(`Total Working Hours: ${this.totalWorkingHours}`);
        console.log(`Total Monthly Wage: $${this.totalWage}`);

        return {
            totalWorkingDays: this.totalWorkingDays,
            totalWorkingHours: this.totalWorkingHours,
            totalWage: this.totalWage
        };
    }

    // Calculate wages till max hours or max days condition is met
    calculateWagesTillCondition(maxHours = 100, maxDays = 20) {
        console.log(`\n--- Calculating wages till ${maxHours} hours or ${maxDays} days for ${this.name} ---`);
        this.totalWorkingDays = 0;
        this.totalWorkingHours = 0;
        this.totalWage = 0;
        let day = 1;

        while (this.totalWorkingHours < maxHours && this.totalWorkingDays < maxDays) {
            console.log(`\nDay ${day}:`);
            const { hoursWorked, dailyWage } = this.calculateDailyWage();
            if (hoursWorked > 0) this.totalWorkingDays++;
            this.totalWorkingHours += hoursWorked;
            this.totalWage += dailyWage;
            day++;
        }

        console.log(`\n--- Final Summary for ${this.name} ---`);
        console.log(`Total Working Days: ${this.totalWorkingDays}`);
        console.log(`Total Working Hours: ${this.totalWorkingHours}`);
        console.log(`Total Wage: $${this.totalWage}`);

        return {
            totalWorkingDays: this.totalWorkingDays,
            totalWorkingHours: this.totalWorkingHours,
            totalWage: this.totalWage
        };
    }

    // Get employee details
    getDetails() {
        return {
            id: this.id,
            name: this.name,
            hourlyRate: this.hourlyRate,
            totalWorkingDays: this.totalWorkingDays,
            totalWorkingHours: this.totalWorkingHours,
            totalWage: this.totalWage
        };
    }
}

export default Employee;
