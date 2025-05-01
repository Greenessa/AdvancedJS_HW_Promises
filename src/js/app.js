// TODO: write your code here
import GameSavingLoader from './object';

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    console.log(saving);
  }, (error) => {
    console.log(`Ошибка: ${error.message}`)
  });