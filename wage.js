class Employee{

    static FULL_TIME_HOURS = 8;
    static PART_TIME_HOURS = 4;
    static PRESENT = 1;
    static ABSENT = 0;
    static PART_TIME = 2;

    constructor(id, name, horlyRate=20){
        this.id =id;
        this.name = name;
        this.hourlyRate= horlyRate;
        this.totalworkingDays = 0;
        this.totalWorkingHours = 0;
        this.totalWage = 0;

    }

    checkAttendance(){
        return Math.floor(Math.random()*3)
        
    }


}