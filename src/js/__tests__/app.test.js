import { test } from '@jest/globals';
import showHealth from '../app.js';

test.each([
  { heroesObj: { name: 'Маг', health: 90 }, expected: 'healthy' },
  { heroesObj: { name: 'Маг', health: 45 }, expected: 'wounded' },
  { heroesObj: { name: 'Маг', health: 10 }, expected: 'critical' },
])('inline table', ({ heroesObj, expected }) => {
  const result = showHealth(heroesObj);
  expect(result).toBe(expected);
});
