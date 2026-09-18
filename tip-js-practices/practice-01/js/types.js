"use strict";

const result1 = "8" + 2;
console.log('1. "8" + 2 =', result1);
console.log("   Тип:", typeof result1);

const result2 = "8" - 2;
console.log('2. "8" - 2 =', result2);
console.log("   Тип:", typeof result2);

const result3 = Number("8") + 2;
console.log('3. Number("8") + 2 =', result3);
console.log("   Тип:", typeof result3);

const result4 = "12" > "3";
console.log('4. "12" > "3" =', result4);
console.log("   Тип:", typeof result4);

const result5 = 12 === "12";
console.log('5. 12 === "12" =', result5);
console.log("   Тип:", typeof result5);

const result6 = Number("");
console.log('6. Number("") =', result6);
console.log("   Тип:", typeof result6);

const result7 = Number("text");
console.log('7. Number("text") =', result7);
console.log("   Тип:", typeof result7);

const result8 = Boolean("false");
console.log('8. Boolean("false") =', result8);
console.log("   Тип:", typeof result8);

const result9 = typeof null;
console.log("9. typeof null =", result9);
console.log("   Тип результата:", typeof result9);

const result10 = typeof NaN;
console.log("10. typeof NaN =", result10);
console.log("   Тип результата:", typeof result10);