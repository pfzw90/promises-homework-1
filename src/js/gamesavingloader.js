import read from './reader';
import json from './parser';


export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((bufferResponse) => json(bufferResponse)
        .then((jsonResponse) => resolve(jsonResponse)));
    });
  }
}
