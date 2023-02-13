import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name: "Kent C. Dodds",
    url: "https://pbs.twimg.com/profile_images/1097518581250613249/4poDd0IC_400x400.png",
    age: 25,
    note: "Test Sample"
  }]);

  return (
    <div className="App">
      <h3>Invited Guest</h3>
      <List people={people} />
      <AddTodo setPeople={setPeople}/>
    </div>
  );
}

export default App;
