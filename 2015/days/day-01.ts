import { IDay } from '../../library/i-day';
import { getDataFromFile } from '../../library/utility';
import { yearDataDirectory } from '../year-config';

export class Day01 implements IDay {
  public async a(): Promise<void> {
    const data: string[] = await getDataFromFile(
      `${yearDataDirectory}\\Day 01 Data.txt`
    );
    let floor: number = 0;
    data.forEach((floorDirections): void => {
      let characterPosition: number = 0;
      let directionsLength: number = floorDirections.length;
      for (; characterPosition < directionsLength; characterPosition++) {
        const character: string = floorDirections.substr(characterPosition, 1);
        if (character === '(') {
          floor++;
          continue;
        }
        floor--;
      }
    });
    console.log(`Day 1, 2015, part a: ${floor}`);
  }

  public async b(): Promise<void> {
    console.log(`Day 1, 2015, part b: N/A`);
  }
}
