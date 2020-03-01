import React from 'react'
import { Link } from 'react-router-dom'

function ChordList() {
  const chordListStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }

  const chordButtonsDivStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '5px',
  }

  const chordButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90px',
    width: '100px',
    margin: '5px',
    padding: '5px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(#CEC0BE, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div style = {chordListStyle}>
      <h1>Select a Chord Type</h1>
      <div style = {chordButtonsDivStyle}>
        <Link style = {chordButtonStyle} to="/major">Major Triad</Link>
        <Link style = {chordButtonStyle} to="/minor">Minor Triad</Link>
        <Link style = {chordButtonStyle} to="/7ths">Dominant 7ths</Link>
        <Link style = {chordButtonStyle} to="/major">Major 7ths</Link>
        <Link style = {chordButtonStyle} to="/major">Minor 7ths</Link>
        <Link style = {chordButtonStyle} to="/major">Diminished</Link>
        <Link style = {chordButtonStyle} to="/major">Half Diminished</Link>
        <Link style = {chordButtonStyle} to="/major">Augmented</Link>
      </div>
      <Link to='/'>Main Menu</Link>
    </div>
  );
}

export default ChordList;
