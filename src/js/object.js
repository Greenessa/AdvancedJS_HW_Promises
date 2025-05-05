import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load() {
    read().then((data) => json(data))
    .then((value) => {
      console.log(value);
      return value
    }).catch((error) => console.log('Файл не загрузился'))
  }
}


