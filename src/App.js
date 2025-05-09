import { useState } from 'react';
import { Typography, Select, Button } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {

  const [note, setNote] = useState('C');

  const getHarmonicField = () => {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const majorScaleIntervals = [2, 2, 1, 2, 2, 2];

    const startIndex = notes.indexOf(note);
    const scale = [notes[startIndex]];

    let currentIndex = startIndex;
    majorScaleIntervals.forEach(interval => {
      currentIndex = (currentIndex + interval) % notes.length;
      scale.push(notes[currentIndex]);
    });

    [1, 2, 5].forEach(index => {
      scale[index] += 'm';
    });
    [6].forEach(index => {
      scale[index] += '°';
    });

    console.log(scale);
    return scale;
  };

  return (
    <div className="App">
      <Title style={{ textAlign: 'center' }}>
        Thiaguera Music App
      </Title>
      <Select
        placeholder="Select note"
        value={note}
        onChange={setNote}
        style={{ width: 200, marginRight: 10 }}
        options={[
          { value: 'C', label: 'C' },
          { value: 'D', label: 'D' },
          { value: 'E', label: 'E' },
          { value: 'F', label: 'F' },
          { value: 'G', label: 'G' },
          { value: 'A', label: 'A' },
          { value: 'B', label: 'B' },
        ]}
      />
      <Button type="primary" onClick={getHarmonicField}>
        Get Harmonic Field
      </Button>
    </div>
  );
}

export default App;
