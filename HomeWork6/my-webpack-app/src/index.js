import _ from 'lodash';

function component() {

      


    const element = document.createElement('div');
  
    
    element.innerHTML = _.join(['Hello', 'World!!!'], ' ');

      
    return element;
  }
  
  class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
       // let message:string = "Hello World" ;
        //console.log(message);
    }
}

let test = new TestClass();



document.body.appendChild(component());