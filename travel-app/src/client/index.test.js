const form = import( 'index.js' )

test('the funciton does not output false', () => {
    expect(form).toBeDefined()
})