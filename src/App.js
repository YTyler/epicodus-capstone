import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';
import ChordList from './components/ChordList';


function App() {
  return (
    <div>
    <h1>App Title</h1>
      <div className="App">
        <div>
        <RootMenu/>
        <h2 id='saved'>My Saved Lists</h2>
        </div>
      <Switch>
      <Route exact path='/' render={()=><NoteMenu />} />
      <Route exact path='/chords' render={()=><ChordList />} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
