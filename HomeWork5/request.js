const http = require('http')

const PARALLEL = 'parallel'
const SERIAL = 'serial'
const req = (options) = () => {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:8001`, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
    })
    }).on("error", (err) => reject(console.log(`ERROR: ${err}`)))
  })
}

const request = async (N, type) => {
    if (type == PARALLEL) {
    //  console.log("PARALLEL");
   
      for (var i = 0; i < N; i++) {
     
      req()
     
     .then(data => console.log(`parallel output (${i}): ${data}`))
     .catch(console.log)
    }
  }
  if (type == SERIAL) {
    //console.log("SERIAL");
    for (var i = 0; i < N; i++) {
     try {
        const data = await req()
        console.log(`serial output (${i}): ${data}`)
        }
        catch (err) {
        console.log('Server Not Found');
      
        }
    }
  }
}


let num = process.argv[2];
let type = process.argv[3];

request(num, type);

