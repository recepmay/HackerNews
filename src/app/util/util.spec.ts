import {formatTimestamp} from "./time.util";
import {trimStoryTitle} from "./trim.util";
import {getRandomizedRange} from "./randomize.util";

const timestamp: number = 1628726509;
const storyTitle: string = 'Weather is going to be nice tomorrow!';

fdescribe('util tests', () => {
  it('time.util.ts should return the formatted time', () => {
    const formattedTime = formatTimestamp(timestamp);
    expect(formattedTime).toBe('12 Aug, 2021');
  });
  it('trim.util.ts should return the first word from the sentence', () => {
    const trimmedWord = trimStoryTitle(storyTitle);
    expect(trimmedWord).toBe('Weather');
  });
  it('randomize.util.ts should return two random numbers in given range with difference of 10', () => {
    const [randomA, randomB] = getRandomizedRange(40);
    expect(randomB - randomA).toBe(10);
    expect(randomA).toBeLessThan(40);
    expect(randomB).toBeLessThan(40);
  });
});
