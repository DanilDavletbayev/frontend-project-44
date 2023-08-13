import readlineSync from 'readline-sync';

const numOfRounds = 3; // Вводим переменную обозначающую количество раундов

const startGames = (isText, getDataGames) => { // Создаем функцию с двумя параметрами на вход (проверка на текст, данные игры)
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`); // Добавляем приветствие с помощью библиотеки ридлайнсинк

  console.log(isText); // Вывод на экран содержимого переменной isText
  for (let i = numOfRounds; i > 0; i -= 1) { // Создаем цикл for для установления ограничений по раундам
    const [question, trueAnswer] = getDataGames(); // с помощью деструктуризации создаем массив c двумя переменными и вкладываем его в параметр getDataGames
    console.log(`Question: ${question}`); // Выводим на экран наш вопрос который подразумевает рандомное число

    const userAnswer = readlineSync.question('Answer: '); // Создаем переменную ответ пользователя и с помощью библиотеки ридлайн даем пользователю ввести ответ
    if (userAnswer !== trueAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "${trueAnswer}".`);

      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}; // Создали условную конструкцию по которой игра выдает при неправильном ответе реакцию и возвращает к началу игры, а при правильных ответах поздравляет с победой
export default startGames;