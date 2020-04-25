const form = require('./server.js');

test('the funciton does not output false', () => {
    expect(form).not.toBe(false)
})