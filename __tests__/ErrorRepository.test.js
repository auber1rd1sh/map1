import ErrorRepository from '../src/ErrorRepository';

describe('ErrorRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new ErrorRepository();
    repository.add(404, 'Not Found');
    repository.add(500, 'Internal Server Error');
  });

  test('should return the correct description for an existing error code', () => {
    expect(repository.translate(404)).toBe('Not Found');
    expect(repository.translate(500)).toBe('Internal Server Error');
  });

  test('should return "Unknown error" for a non-existing error code', () => {
    expect(repository.translate(123)).toBe('Unknown error');
  });

  test('should allow adding new error codes', () => {
    repository.add(403, 'Forbidden');
    expect(repository.translate(403)).toBe('Forbidden');
  });
});
