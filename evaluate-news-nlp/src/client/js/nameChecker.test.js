const checker = require('./nameChecker.js');

test('the funciton does not output false', () => {
    expect(checker).not.toBe(false)
})