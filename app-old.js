import http from 'http';
//const http = require('http');

http.createServer( (request, response) => {

    //response.writeHead(200, { 'Content-Type': 'text/plain' });
    //response.writeHead(200, { 'Content-Type': 'application/json' });
    //response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //response.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Marco'
    // }
    // response.write( JSON.stringify( persona ) );
    
    // response.write( 'id; nombre\n' );
    // response.write( '1; Fernando\n' );
    // response.write( '2; Maria\n' );
    // response.write( '3; Juan\n' );
    // response.write( '4; Pedro\n' );
    // response.end();

    response.write( 'Hola Mundo ');
    response.end();

}).listen( 8080 );

console.log('Escuchando el puerto', 8080);