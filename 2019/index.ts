import { IDay } from '../library/i-day';
import { Day01 } from './days/day-01';

export function start(): void {
	const day: IDay = new Day01();
	day.a();
	day.b();
}
