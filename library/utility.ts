import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

export async function getDataFromFile(fileName: string): Promise<string[]> {
  const data: string[] = [];
  try {
    const rl = createInterface({
      input: createReadStream(fileName),
      crlfDelay: Infinity
    });

    rl.on('line', line => {
      data.push(line);
    });

    await once(rl, 'close');
  } catch (err) {
    console.error(err);
  }

  return data;
}

export const hexArray: string[] = '0123456789abcdef'.split('');
// export function bytesToHex()
// public static String bytesToHex(byte[] bytes) {
// 		char[] hexChars = new char[bytes.length * 2];
// 		for ( int j = 0; j < bytes.length; j++ ) {
// 				int v = bytes[j] & 0xFF;
// 				hexChars[j * 2] = hexArray[v >>> 4];
// 				hexChars[j * 2 + 1] = hexArray[v & 0x0F];
// 		}
// 		return new String(hexChars);
// }

export function getStateString(state: number[]): string {
  return state.map(toString).join();
}

export function convertToGrid(num: number): number[] {
  const grid: number[] = [0, 0];
  if (num === 0) {
    return grid;
  }

  let currentNumber = num;
  let radix = 4;
  let index = 0;
  while (Math.pow(radix, index) <= currentNumber) {
    index++;
  }
  index--;
  while (currentNumber != 0) {
    // const remainder: number = currentNumber & radix;
    grid[1 - index] = Math.floor(currentNumber / Math.pow(radix, index));
    currentNumber = currentNumber % Math.pow(radix, index);
    index--;
  }

  return grid;
}

export function convertFromGrid(grid: number[]): number {
  let num: number = 0;
  const radix: number = 4;
  for (let i: number = 0; i < grid.length; i++) {
    num += Math.pow(radix, grid.length - i - 1) * grid[i];
  }
  return num;
}
