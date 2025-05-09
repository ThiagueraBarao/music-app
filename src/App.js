import { useState } from 'react';
import { Typography, Select, Button } from 'antd';
import './App.css';

const { Title, Text } = Typography;

function App() {

  const [note, setNote] = useState('C');
  const [field, setField] = useState([]);
  const [grades, setGrades] = useState([1, 5, 4]);

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

    const scaleWithGrades = scale.map((chord, index) => {
      if (grades.includes(index + 1)) {
        return chord;
      }
      return '';
    });

    setField(scaleWithGrades);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title style={{ textAlign: 'center'}}>
        Thiaguera Music App
      </Title>
      <Select
        placeholder="Select note"
        value={note}
        onChange={setNote}
        style={{ width: 200, marginBottom: 10 }}
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
      <Select
        mode="multiple"
        placeholder="Select Grades"
        onChange={setGrades}
        defaultValue={[1, 5, 4]}
        style={{ width: 200, marginBottom: 10 }}
        options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
          { value: 5, label: '5' },
          { value: 6, label: '6' },
          { value: 7, label: '7' },
        ]}
      />
      <Button type="primary" onClick={getHarmonicField} style={{ marginBottom: 20 }}>
        Get Harmonic Field
      </Button>
      <div>
        {field.map((chord, index) => (
          <Text key={index} style={{ display: 'block', textAlign: 'center', fontSize: 40 }}>{chord}</Text>
        ))}
      </div>
    </div>
  );
}

export default App;
