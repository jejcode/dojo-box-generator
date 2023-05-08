import './App.css';
import {useState} from 'react';
import BoxForm from './components/BoxForm';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [boxes, SetBoxes] = useState([])

  const drawNewBox = (boxData) => {
    SetBoxes([...boxes,boxData])
    console.log(boxes)
  }
  return (
    <div className="container">
      <BoxForm onNewBox={ drawNewBox }/>
      <DisplayBoxes listOfBoxes={ boxes }/>
    </div>
  );
}

export default App;
