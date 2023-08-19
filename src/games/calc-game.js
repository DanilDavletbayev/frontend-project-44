import getRandomNum from '../random-number.js'; // Внедрили функцию получения рандомного числа
import startGames from '../index.js'; // Внедрили функцию структуры игры

const isText = "What is the result of the expression?";

const operators = ['+', '-', '*']; //Создали массив возможных операторов

const calculate = (a, operator, b) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return null;
    }
};

const getDataGames = () => {
    const aNum = getRandomNum(1, 20);
    const bNum = getRandomNum(1, 20);
    const operator = operators[getRandomNum(0, operators.length - 1)]; //Генирируем случайный индекс для выбора оператора из массива
    const question = `${aNum} ${operator} ${bNum}`;
    const trueAnswer = calculate(aNum, operator, bNum);

    console.log(operator);
    return [question, String(trueAnswer)];
};

const startBrainCalcGames = () => startGames(isText, getDataGames);
export default startBrainCalcGames;