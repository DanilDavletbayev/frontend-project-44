import getRandomNum from '../random-number.js'; // Внедрили функцию получения рандомного числа
import startGames from '../index.js'; // Внедрили функцию структуры игры

const isText = "What is the result of the expression?";

const operatorArray = ['+', '-', '*'];

const randomOperator = Math.floor(Math.random() * operatorArray.length);