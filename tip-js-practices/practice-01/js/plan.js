"use strict";

const totalTasks = 9;
const completedTasks = 9;
const dailyLimit = 3;

const isInvalidType =
typeof totalTasks !== "number" ||
typeof completedTasks !== "number" ||
Number.isNaN(totalTasks) ||
Number.isNaN(completedTasks) ||
!Number.isInteger(totalTasks) ||
!Number.isInteger(completedTasks);

const isOutOfRange =
totalTasks < 0 ||
totalTasks > 1000 ||
completedTasks < 0 ||
completedTasks > totalTasks;

const isInvalidBase = isInvalidType || isOutOfRange;

const isInvalidLimit =
typeof dailyLimit !== "number" ||
Number.isNaN(dailyLimit) ||
!Number.isInteger(dailyLimit) ||
dailyLimit < 1 ||
dailyLimit > 1000;

if (isInvalidBase || isInvalidLimit) {
    console.log("Неправильные входные данные");
} else if (completedTasks == totalTasks) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
} else {
    let remaining = totalTasks - completedTasks;
    let days = 0;

    console.log(`Осталось задач: ${remaining}`);

    while (remaining > 0) {
        days += 1;

        const doneToday = remaining > dailyLimit ? dailyLimit : remaining;

        remaining -= doneToday;

        console.log(`День ${days}: выполнено ${doneToday}, осталось ${remaining}`);
    }

    console.log(`Поребуется дней: ${days}`);
}