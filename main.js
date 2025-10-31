import Employee from "./wage.js";

const emp1 = new Employee(1, "Nishanth", 25);

emp1.calculateDailyWage();
emp1.calculateMonthlyWage();

emp1.calculateWagesTillCondition();