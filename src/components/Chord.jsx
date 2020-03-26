import React from 'react';
import { Link } from 'react-router-dom'
import { Chord as TonalChord } from '@tonaljs/tonal';
import  * as vex from 'vexchords';

function Chord(props) {
  const chord = TonalChord.get(props.currentRoot + props.type)
  //localStyles

    return (
      <div className = 'rightMenu'>
        <h1>{chord.name} chords</h1>
        <h2>Notes: {chord.notes.join('-')}</h2>
        <div className='nav'>
          <Link to='/'>Main Menu</Link>
        </div>
        <div className='nav'>
          <Link to='/chords'>Back</Link>
        </div>
      </div>
    );
}

export default Chord;
