const form = require('./app.js');

test('async test', async () => {
    expect.assertions(1)
    const result = await runAsyncOperation()
    expect(result).toBe(true)
    done()
  })