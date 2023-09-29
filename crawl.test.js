const {normalizeURL,getURLsFromHTML} =require("./crawl.js")

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

test('getURLsFromHTML absolute',()=>
{
    const inputHTMLBody=`
    <html>
        <body>
            <a href="https://ishaans-portfolio.onrender.com/">
            Ishaan 
            </a>
        </body>
    </html>        
    `
    const inputBaseURL="https://ishaans-portfolio.onrender.com"
    const actual=getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected=["https://ishaans-portfolio.onrender.com/"]
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML relative',()=>
{
    const inputHTMLBody=`
    <html>
        <body>
            <a href="/path/">
            Ishaan 
            </a>
        </body>
    </html>        
    `
    const inputBaseURL="https://ishaans-portfolio.onrender.com"
    const actual=getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected=["https://ishaans-portfolio.onrender.com/path/"]
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML both',()=>
{
    const inputHTMLBody=`
    <html>
        <body>
            <a href="https://ishaans-portfolio.onrender.com/path1/">
            Ishaan 1
            </a>
            <a href="/path2/">
            Ishaan 2
            </a>
        </body>
    </html>        
    `
    const inputBaseURL="https://ishaans-portfolio.onrender.com"
    const actual=getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected=["https://ishaans-portfolio.onrender.com/path1/","https://ishaans-portfolio.onrender.com/path2/"]
    expect(actual).toEqual(expected)
})



test('getURLsFromHTML relative',()=>
{
    const inputHTMLBody=`
    <html>
        <body>
            <a href="Invalid">
            Invalid URL
            </a>
        </body>
    </html>        
    `
    const inputBaseURL="https://ishaans-portfolio.onrender.com"
    const actual=getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected=[]
    expect(actual).toEqual(expected)
})