"use strict";

const totalTasks = 9;
const completedTasks = 9;

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

if (isInvalidType || isOutOfRange) {
  console.log("Ошибка: неправильные входные данные.");
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const progress = (completedTasks / totalTasks) * 100;
  const progressFormatted = progress.toFixed(1);

  let status;
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${progressFormatted}%`);
  console.log(`Статус: ${status}`);
}