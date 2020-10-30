const http = require('http')
const _ = require('lodash')

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    // setHeadercontent type
    res.setHeader('content-Type', 'text/plain');

    res.write('hello, gerry');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listing for request on port 30000');
})