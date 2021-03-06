import GameSavingLoader from '../gamesavingloader';
import GameSaving from '../gamesaving';


test('should return GameSaving object', (done) => {
  GameSavingLoader.load().then((saving) => {
    const res = new GameSaving(saving);
    expect(res).toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
    expect(res instanceof GameSaving).toBeTruthy();
    done();
  });
});
