import getRandomNum from '../random-number.js';
import startGames from '../index.js';

const isText = 'What number is missing in the progression?';

const generateProgression = () => {
    const progressionLength = getRandomNum(5, 10);
    const progressionStep = getRandomNum(1, 5);
    const hiddenIndex = getRandomNum(0, progressionLength - 1);

    const progression = [];
    for (let i = 0; i < progressionLength - 1; i += 1) {
        progression.push(progressionStep * i);
    }

    const hiddenValue = progression[hiddenIndex];
   progression[hiddenIndex] = '..';

    return {progression, hiddenValue};
};

const getDataGames = () => {
    const { progression, hiddenValue } = generateProgression();
    
    const question = 'Question: ' + progression.join(' ');

    const trueAnswer = hiddenValue.toString();

    return [question, trueAnswer];
};


const startProgressionGames = () => startGames(isText, getDataGames);
export default startProgressionGames;