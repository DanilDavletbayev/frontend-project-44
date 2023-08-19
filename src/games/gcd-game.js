import getRandomNum from '../random-number.js'; 
import startGames from '../index.js';

const isText = 'Find the greatest common divisor of given numbers.';

const getDivisor = (a, b) => {
    let min = Math.min(a, b);

    for (let i = min; i > 0; i -= 1) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
    return 1;
};

const getDataGames = () => {
    const aNum = getRandomNum(1, 100);
    const bNum = getRandomNum(1, 100);

    const question = `${aNum} ${bNum}`;
    const trueAnswer = getDivisor(aNum, bNum);

    return [question, String(trueAnswer)];
};

const startBrainGcdGames = () => startGames(isText, getDataGames);
export default startBrainGcdGames;