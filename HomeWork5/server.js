const DELAY = 100; 
const PORT = 8001;
const HOSTNAME = '127.0.0.1';


require('http').createServer((rec, res) => {
    console.log('Server is runing...')
    setTimeout(() => { 
           res.end('Hello World!')
    }, DELAY) 

    console.log('logging')
}).listen(PORT,HOSTNAME,() => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})

