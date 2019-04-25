import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <Person name="zzx" age="22"/>
        <Person name="yj" age="19"/>
        <Person name="dd" age="18">你好，React！</Person>

    </div>
  );
}

export default App;
