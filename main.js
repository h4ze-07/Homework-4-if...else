// Дано два різні числа. Визначити, яке з них більше, а яке менше.
let numbOne = prompt('Введіть перше число: ');
let numbTwo = prompt('Введіть друге число: ');
(numbOne > numbTwo) ? alert(`Число ${numbOne} більше`) : alert(`Число ${numbTwo} більше`);



// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
let distanceInKilos = prompt('Введіть першу відстань у кілометрах: ');
let distanceInFoots = prompt('Введіть другу відстань у футах: ');

distanceInKilos *= 1000;
distanceInFoots *= 0.305;

(distanceInKilos < distanceInFoots)? alert(`Відстань ${distanceInKilos} менша`) : alert(`Відстань у футах ${distanceInFoots} менша`);



// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
let a = prompt('Введіть перше число: ');
let b = prompt('Введіть друге число: ');

(b % a === 0) ? alert(`Число ${a} є дільником числа ${b}`) : alert(`Число ${a} не є дільником числа ${b}`);



// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
let testNumber = prompt('Введіть число: ');
let lastDigit = Number(testNumber) % 10;

(lastDigit % 2 === 0) ? alert(`Остання цифра є парною: ${lastDigit}`) : alert(`Остання цифра не є парною: ${lastDigit}`);



// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let twoCharts = prompt('Введіть двозначне число:');
if (twoCharts.length === 2) {
    let chartOne = Number(twoCharts[0]);
    let chartTwo = Number(twoCharts[twoCharts.length - 1]);
    (chartOne > chartTwo) ? alert(`Перша цифра більша за другу (${chartOne} > ${chartTwo})`) : alert(`Друга цифра більша за першу (${chartOne} < ${chartTwo})`);
} else {
    alert('Введіть двозначне число!');
}



// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.
let threeCharts = prompt('Введіть тризначне число:');
if (threeCharts.length === 3) {
    let c = Number(threeCharts[0]);
    let d = Number(threeCharts[1]);
    let e = Number(threeCharts[2]);

    ((c + d + e) % 2 === 0) ? alert('Сумма цифр є парною') : alert('Сумма цифр не є парною');
    ((c + d + e) % 5 === 0) ? alert("Сумма цифр є кратною п'яти") : alert("Сумма цифр не є кратною п'яти");
    ((c * d * e) > 100) ? alert(`Добуток цифр є більшим за 100: ${(c * d * e)}`) : alert(`Добуток цифр менше ніж 100: ${(c * d * e)}`);

} else {
    alert('Введіть тризначне число!')
}



// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
let threeChartsExample = prompt('Введіть тризначне число:');
if (threeChartsExample.length === 3) {
    (threeChartsExample[0] == threeChartsExample[1] == threeChartsExample[2]) ? alert(`Цифри є однаковими: ${threeChartsExample}`) : alert(`Цифри не є однаковими: ${threeChartsExample}`);
    (threeChartsExample[0] == threeChartsExample[1] || threeChartsExample[0] == threeChartsExample[2] || threeChartsExample[1] == threeChartsExample[2]) ? alert(`Є однакові цифри: ${threeChartsExample}`) : alert(`Немає однакових цифр: ${threeChartsExample}`);
} else {
    alert('Введіть тризначне число!')
}



// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let mirrorNumber = prompt('Введіть шестизначне число:');
if (mirrorNumber.length === 6) {
    ((Number(mirrorNumber.slice(0, 3))) == (Number(mirrorNumber.slice(3).split("").reverse().join("")))) ? alert(`Число є дзеркальним: ${mirrorNumber.slice(0, 3)} ${mirrorNumber.slice(3)}`) : alert(`Число не дзеркальне: ${mirrorNumber.slice(0, 3)} ${mirrorNumber.slice(3)}`);
} else {
    alert('Введіть шестизначне число!')
}