const form = import( 'server.js' )

test('the funciton does not output false', () => {
    expect(form).not.toBe(false)
})