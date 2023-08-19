import getRandomNum from '../random-number.js'; // Внедрили функцию получения рандомного числа
import startGames from '../index.js'; // Внедрили функцию структуры игры
const isEven = (num) => num % 2 === 0; // проверяем число на четность

const isText = 'Answer "yes" if the number is even, otherwise answer "no".'; // переменная которая выдает нам правило ответа в игре

const getDataGames = () => { 
    const question = getRandomNum(1, 100); // вводим в переменную вопроса функцию получения рандомного числа

    const trueAnswer = isEven(question) ? 'yes' : 'no'; // Создаем тернарный оператор с применением функции проверки на четность рандомного числа и ответом
    return [String(question) , trueAnswer] // возвращаем
};

const startBrainEvenGames = () => startGames(isText, getDataGames);

export default startBrainEvenGames;


