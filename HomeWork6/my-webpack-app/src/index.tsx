import React from "react";
import { render } from 'react-dom';

const App = () => {
 let input 
  return (
    <div>
      <form >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


render(<App />, document.getElementById('root'));
