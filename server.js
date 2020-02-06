const express = require('express');

const server = express();

server.get('/hello', (request, response) => {
    response.send('Hello, World!');
})

server.listen(3000);
