import read from "./reader";
import json from "./parser";

// export default class GameSavingLoader {
//   static load() {
//     const data = read(); // возвращается Promise!
//     const value = json(data); // возвращается Promise!
//     return value;
//   }
// }

export default class GameSavingLoader {
  static load() {
    return new Promise(function(resolve, reject) {
    const data = read(); // возвращается Promise!
    const value = json(data); // возвращается Promise!
    console.log(value);
    resolve(value);
    reject(new Error('Ошибка загрузки данных'));
  })}
}
