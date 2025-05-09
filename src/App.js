import { useState, useEffect } from 'react';
import { Typography, Select, Table } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {

  const [note, setNote] = useState('C');
  const [field, setField] = useState([]);
  const [grades, setGrades] = useState([1, 5, 4]);

  const getHarmonicField = (noteValue) => {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const majorScaleIntervals = [2, 2, 1, 2, 2, 2];

    const startIndex = notes.indexOf(noteValue);
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

    const scaleWithGrades = grades.map(grade => scale[grade - 1] || '');

    setField(scaleWithGrades);
  };

  useEffect(() => {
    getHarmonicField(note);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getHarmonicField(note);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note, grades]);



  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title style={{ textAlign: 'center' }}>
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
        value={grades}
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
      <div style={{ width: '50%', marginTop: 170 }}>
        <Table
          dataSource={grades.map((grade, index) => ({
            key: index,
            grade: grade,
            chord: field[index] || '',
          }))}
          columns={[
            {
              title: 'Grade',
              dataIndex: 'grade',
              key: 'grade',
              align: 'center',
            },
            {
              title: 'Chord',
              dataIndex: 'chord',
              key: 'chord',
              align: 'center',
            },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default App;
