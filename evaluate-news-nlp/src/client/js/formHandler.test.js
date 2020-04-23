const form = require('./formHandler.js');

test('the funciton does not output false', () => {
    expect(form).not.toBe(false)
})