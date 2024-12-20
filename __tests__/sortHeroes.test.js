import sortHeroesByHealth from '../src/sortHeroes';

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroesByHealth(input);

  expect(result).toEqual(expected);
});

test('should not mutate the original array', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const original = [...input];

  sortHeroesByHealth(input);

  expect(input).toEqual(original);
});

test('should handle an empty array', () => {
  const input = [];
  const result = sortHeroesByHealth(input);
  expect(result).toEqual([]);
});

test('should handle an array with one hero', () => {
  const input = [{ name: 'маг', health: 100 }];
  const result = sortHeroesByHealth(input);
  expect(result).toEqual([{ name: 'маг', health: 100 }]);
});
