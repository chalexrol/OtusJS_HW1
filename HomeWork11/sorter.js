const fs = require('fs')
const readline = require("readline")

// temp data
let s = ''
// files count
let wcount = 1
// file size in mb
const filesize = 10*1024*1024
let sizeData = 0
// source file
const rstream= fs.createReadStream('sample.txt',)
let rstream_arr = []
let lineReader = [];
let wstream = fs.createWriteStream('data'+wcount+'.txt')

rstream.on('readable', () => {
  s = rstream.read();
  
  if(s != null){
    console.log(s.length)
    sizeData+=s.length
    rstream.pause()
    if(sizeData > filesize){
      console.log(sizeData)
      sizeData=0
    wcount++
    wstream = fs.createWriteStream('data'+wcount+'.txt')
    }
    //for(let j=0;j<10;j++){
     // re = new RegExp(j, 'g')
     // wstream.write(s.match(re).join('')+'\n')
    //}
    //s = ''
    wstream.write(s)
    rstream.resume()
  }
})

rstream.on('end', () => {

console.log('The End')
/*   wcount++
  const wstream = fs.createWriteStream('data'+wcount+'.txt')
  for(let j=0;j<10;j++){
    re = new RegExp(j, 'g')
    wstream.write(s.match(re).join('')+'\n')
  }
  */
  
  
  const wstream_sort = fs.createWriteStream('datasorted.txt')
  for(let i=0;i<wcount;i++){
    rstream_arr.push('data'+(i+1)+'.txt')
  }
  
  for(let x in rstream_arr) {
    let fileName = rstream_arr[x]
    lineReader[x] = readline.createInterface({
        input: fs.createReadStream(fileName)
    })

    lineReader[x].on('line', function(line) {
        wstream_sort.write(line)
    })
  } 
//console.log(wcount, ' files created')
})