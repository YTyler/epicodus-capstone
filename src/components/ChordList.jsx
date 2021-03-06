import React from 'react'
import { Link } from 'react-router-dom'

function ChordList(props) {

//local styles
  const chordButtonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '5px',
  }
  const chordButtonStyle = {
    display: 'grid',
    alignItems: 'center',
    height: '115px',
    width: '10vw',
    minWidth: '110px',
    margin: '5px auto',
    padding: '5px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'clamp(16px, 1.25vw, 50px)',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div className = 'rightMenu'>
      <h1>Select a Chord Type</h1>
      <div style = {chordButtonContainerStyle}>
        <Link style = {chordButtonStyle} to="/chords/major">Major Triad</Link>
        <Link style = {chordButtonStyle} to="/chords/minor">Minor Triad</Link>
        <Link style = {chordButtonStyle} to="/chords/7ths">Dominant 7ths</Link>
        <Link style = {chordButtonStyle} to="/chords/maj7">Major 7ths</Link>
        <Link style = {chordButtonStyle} to="/chords/min7">Minor 7ths</Link>
        <Link style = {chordButtonStyle} to="/chords/dim">Diminished</Link>
        <Link style = {chordButtonStyle} to="/chords/half-dim">Half Diminished (m7♭5)</Link>
        <Link style = {chordButtonStyle} to="/chords/aug">Augmented</Link>
      </div>
      <div className='nav'>
      <Link to='/'>Main Menu</Link>
      </div>
    </div>
  );
}

export default ChordList;
