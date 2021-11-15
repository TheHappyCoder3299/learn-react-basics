import React,{useState} from 'react'

import TodoList from './TodoList';
function App() {
  // must add empty tag (called fragments) because javaScript functions can 
  //only return one object
  return (
    <>
    <TodoList />
    <input type='text' />
    <button>Add Todo</button>
    <button>Clear Todo</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
