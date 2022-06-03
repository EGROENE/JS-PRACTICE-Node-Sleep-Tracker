// Integrate 'readline=sync' package from NPM:
const rs = require('readline-sync');

// Ask user for their name:
const userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '! Let\'s input the hours you slept on each night of this week.');

// Function to get nightly hours slept, then sum them together:
let totalHoursSlept = 0;
const getHoursSlept = () => {
    // Ask user how many hours they slept on each night of the week:
    // MONDAY:
    const getMonday = () => {
        let monday = rs.question('How many hours did you sleep on Monday night? ');

        if (!isNaN(monday)) {
            monday = Number(monday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += monday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getMonday();
        }
    }
    getMonday();

    // TUESDAY:
    const getTuesday = () => {
        let tuesday = rs.question('How many hours did you sleep on Tuesday night? ');

        if (!isNaN(tuesday)) {
            tuesday = Number(tuesday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += tuesday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getTuesday();
        }
    }
    getTuesday();

    // WEDNESDAY:
    const getWednesday = () => {
        let wednesday = rs.question('How many hours did you sleep on Wednesday night? ');

        if (!isNaN(wednesday)) {
            wednesday = Number(wednesday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += wednesday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getWednesday();
        }
    }
    getWednesday();

    // THURSDAY:
    const getThursday = () => {
        let thursday = rs.question('How many hours did you sleep on Thursday night? ');

        if (!isNaN(thursday)) {
            thursday = Number(thursday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += thursday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getThursday();
        }
    }
    getThursday();

    // FRIDAY:
    const getFriday = () => {
        let friday = rs.question('How many hours did you sleep on Friday night? ');

        if (!isNaN(friday)) {
            friday = Number(friday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += friday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getFriday();
        }
    }
    getFriday();

    // SATURDAY:
    const getSaturday = () => {
        let saturday = rs.question('How many hours did you sleep on Saturday night? ');

        if (!isNaN(saturday)) {
            saturday = Number(saturday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += saturday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getSaturday();
        }
    }
    getSaturday();

    // SUNDAY:
    const getSunday = () => {
        let sunday = rs.question('How many hours did you sleep on Sunday night? ');

        if (!isNaN(sunday)) {
            sunday = Number(sunday);
            totalHoursSlept = Number(totalHoursSlept);
            totalHoursSlept += sunday;
            return totalHoursSlept;
        } else {
            console.log("Please enter a valid number");
            return getSunday();
        }
    }
    getSunday();

    if (totalHoursSlept === 1) {
        console.log("You slept only one hour this week.");
    } else {
        console.log(`You slept ${totalHoursSlept} hours this week.`);
    }
}
getHoursSlept();

// Function to ask user what their weekly goal was:
const getWeeklyGoal = () => {
    let weeklyGoal = rs.question('How many total hours did you want to sleep this week? ');
    
    if (!isNaN(weeklyGoal)) {
        weeklyGoal = Number(weeklyGoal);
        return weeklyGoal;
    } else {
        console.log("Please enter a valid number.");
        return getWeeklyGoal();
    }
}

// Function to determine and report results:
const getResult = () => {
    let weeklyGoal = getWeeklyGoal();
    let difference = Math.abs(weeklyGoal - totalHoursSlept);
    
    // Series of if / else if to cover possible scenarios:
    if (weeklyGoal === totalHoursSlept) {
        console.log("Congrats! You slept exactly as many hours this week as you wanted to!");
    } else if (totalHoursSlept > weeklyGoal && difference === 1) {
        console.log("Nice! You slept one more hour than you wanted to this week.");
    } else if (totalHoursSlept > weeklyGoal) {
        console.log(`Nice! You slept ${difference} more hours than you wanted to this week.`);
    } else if (totalHoursSlept < weeklyGoal && difference === 1) {
        console.log("You slept one hour less than you wanted to this week.");
    } else { 
        console.log(`You slept ${difference} hours less than you wanted to this week.`);
    }
}
getResult();