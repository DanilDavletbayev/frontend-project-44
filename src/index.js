import readlineSync from 'readline-sync';

const numOfRounds = 3;

const startGames = (isText, getDataGames) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(isText);
  for (let i = numOfRounds; i > 0; i -= 1) {
    const [question, trueAnswer] = getDataGames();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer !== trueAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "${trueAnswer}".`);

      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGames;