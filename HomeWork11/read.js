const fs = require('fs')
const readline = require("readline")
let rstream_arr = []
let lineReader = [];

function cp(from, to) {
  return new Promise((resolve, reject) => {
    const read = fs.createReadStream(from);
    const write = fs.createWriteStream(to);
   // тут надо добавить проверку, чтобы resolve/reject 2 раза не был вызван
    read.on('error', reject);
    write.on('error', reject);
    read.on('close', () => {
      write.close();
      resolve();
    });

    read.on('readable', () => {
        let chunk;
        while (null !== (chunk = read.read(10))) {
          console.log(`Received ${chunk.length} bytes of data.`);
        }
      });

    read.on('data', (chunk) => console.log('read', from,chunk.readline));
   
    write.on('pipe', (src) => {
        console.log('Something is piping into the writer.');
           });
    //read.pipe(write);
  });
}

for(let i=5;i<7;i++){
    rstream_arr.push('data'+(i+1)+'.txt')
  }



const files = rstream_arr;
console.log(files)

Promise.all(files.map((from) => {
  const to = 'datasorted.txt';
  return cp(from, to);
})).then(() => {
  console.log('done');
});

/*
const wstream_sort = fs.createWriteStream('datasorted.txt')
  for(let i=0;i<3;i++){
    rstream_arr.push('data'+(i+1)+'.txt')
  }
  
  for(let x in rstream_arr) {
    let fileName = rstream_arr[x]
    lineReader[x] = readline.createInterface({
        input: fs.createReadStream(fileName)
    })
  
    lineReader[x].on('line', function(line) {
        console.log(fileName,x,line)
        wstream_sort.write(line+'\n')
    })
 
  } */