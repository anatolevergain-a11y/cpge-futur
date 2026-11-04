import type { ExerciseItem } from './cpgeData';
import { ULTRA_EXERCISES_PART1 } from './ultraExercisesPart1';
import { ULTRA_EXERCISES_PART2 } from './ultraExercisesPart2';

export const ULTRA_EXERCISES: ExerciseItem[] = [
  ...ULTRA_EXERCISES_PART1,
  ...ULTRA_EXERCISES_PART2,
];
