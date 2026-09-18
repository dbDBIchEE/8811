"use strict";

function checkProgress(totalInput, completedInput) {

  if (typeof totalInput !== "string" || typeof completedInput !== "string") {
    console.log("Ошибка: неправильные входные данные.");
    return;
  }

  const totalTrimmed = totalInput.trim();
  const completedTrimmed = completedInput.trim();

  if (totalTrimmed === "" || completedTrimmed === "") {
    console.log("Ошибка: неправильные входные данные.");
    return;
  }

  const totalTasks = Number(totalTrimmed);
  const completedTasks = Number(completedTrimmed);

  if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
    console.log("Ошибка: неправильные входные данные.");
    return;
  }

  if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: неправильные входные данные.");
    return;
  }

  const isOutOfRange =
    totalTasks < 0 ||
    totalTasks > 1000 ||
    completedTasks < 0 ||
    completedTasks > totalTasks;

  if (isOutOfRange) {
    console.log("Ошибка: неправильные входные данные.");
    return;
  }

  if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
    return;
  }

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

console.log("Обычные строки");
checkProgress("12", "5");
console.log("_______");
console.log("Строки с пробелами");
checkProgress(" 8 ", " 3 ");
console.log("_______");
console.log("Пустая строка");
checkProgress("", "5");
console.log("_______");
console.log("Строка из пробелов");
checkProgress("   ", "2");
console.log("_______");
console.log("Буквы");
checkProgress("abc", "2");
console.log("_______");
console.log("Дробное число");
checkProgress("5", "2.5");
console.log("_______");
console.log("Infinity");
checkProgress("Infinity", "0");
console.log("_______");
console.log("null");
checkProgress(null, "0");
console.log("_______");
console.log("undefined");
checkProgress(undefined, "0");
console.log("_______");
console.log("Все задачи выполнены");
checkProgress("9", "9");
console.log("_______");
console.log("Ноль задач");
checkProgress("0", "0");
console.log("_______");
console.log("Выполнено больше чем есть");
checkProgress("5", "6");
console.log("_______");
console.log("Слишком много задач");
checkProgress("1001", "0");