const {normalizeURL} =require("./crawl.js")

const {test,expect} =require('@jest/globals')

test('normalizeURL strip protocol',()=>
{
    const input='https://ishaans-portfolio.onrender.com'
    const actual=normalizeURL(input)
    const expected='ishaans-portfolio.onrender.com'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash',()=>
{
    const input='https://ishaans-portfolio.onrender.com'
    const actual=normalizeURL(input)
    const expected='ishaans-portfolio.onrender.com'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals',()=>
{
    const input='https://ISHAANS-portfolio.onrender.com'
    const actual=normalizeURL(input)
    const expected='ishaans-portfolio.onrender.com'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http',()=>
{
    const input='http://ishaans-portfolio.onrender.com'
    const actual=normalizeURL(input)
    const expected='ishaans-portfolio.onrender.com'
    expect(actual).toEqual(expected)
})