const index = require('../index');

test('obsolute - should return positive number', () => {
    const result = index.absolute(1);
    expect(result).toBe(1);
});

test('obsolute - should return positive number', () => {
    const result = index.absolute(-1);
    expect(result).toBe(1);
});

