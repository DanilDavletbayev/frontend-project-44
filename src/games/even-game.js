import getRandomNum from '../random-number.js';
import startGames from '../index.js';
const isEven = (num) => num % 2 === 0;

const isText = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGames = () => {
    const question = getRandomNum();

    const trueAnswer = isEven(question) ? 'yes' : 'no';
    return [String(question) , trueAnswer]
};

const startBrainEvenGames = () => startGames(isText, getDataGames);

export default startBrainEvenGames;


