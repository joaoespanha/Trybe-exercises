const sum = require('./sum');

it('sums two values', () => {
    expect(sum(2, 3)).toBe(5);
})