import React from 'react';
import logo from './logo.svg';
import './App.css';
import { H1 } from './components/atomic/H1';
import { Counter } from './components/counter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './types';


const courses : Array<TodoItem> = [
  {id: 0, title: "Golf & Spa Kunětická hora", location: "Dříteč", description: "Mistrovské 18jamkové hřiště, které pravidelně hostí European Challenge Tour", source: "https://lh3.googleusercontent.com/proxy/nQdjSOVmXgZEpqKF2oeYeI8xksiaoiMXSarpns34q2HPClp68B5zIeZ90YFmyNcJyNmqVp1X_4k7tToo894P4mjl4yf5rX-5eGidatlDWDyDg3Ez8dPwJw"},
  {id: 1, title: "Golfové hřiště Lázně Bohdaneč", location: "Lázně Bohdaneč", description: "18jamkové mistrovské hřiště v sousedství Lázní Bohdaneč", source: "https://gcpa.cz/data/filecache/2b/slide-1.jpg"},
  {id: 2, title: "Park Golf Club", location: "Hradec Králové", description: "Golfové 9jamkové hřiště navržené Davidem Carterem", source: "https://www.konferencniprostory.info/gallery/objects/1070-areal-park-golf-hradec-kralove/areal-park-golf_17-20-47_1.jpg"}
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList items={courses} />
      </header>
    </div>
  );
}

export default App;
