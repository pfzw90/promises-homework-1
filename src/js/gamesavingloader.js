import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((bufferResponse) => json(bufferResponse)
        .then((jsonResponse) => new GameSaving(jsonResponse)));
  }
}
