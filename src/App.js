import { useState, useEffect } from 'react';
import { Typography, Select, Slider, Table, Button } from 'antd';
import './App.css';
import { TikTokOutlined, TrademarkOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import harmonicField from './functions/functions';
import { NOTES, PROGRESSION_OPTIONS, PROGRESSIONS } from './constants';

const { Title } = Typography;



function App() {
  const [note, setNote] = useState('C');
  const [field, setField] = useState([]);
  const [grades, setGrades] = useState([1, 5, 4]);
  const [commonProgression, setCommonProgression] = useState(null);

  const getHarmonicField = (noteValue) => {
    setField(harmonicField(noteValue, grades));
  };

  useEffect(() => {
    getHarmonicField(note);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getHarmonicField(note);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note, grades]);

  const handleNoteChange = (direction) => {
    const currentIndex = NOTES.indexOf(note);
    const newIndex = (currentIndex + direction + NOTES.length) % NOTES.length;
    setNote(NOTES[newIndex]);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}>
        <TikTokOutlined /> Thiaguera Music App
      </Title>

      <Typography.Text strong>Select Note</Typography.Text>
      <div style={{ width: 500, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Button onClick={() => handleNoteChange(-1)}>
          <DownOutlined />
        </Button>
        <Slider
          min={0}
          max={NOTES.length - 1}
          marks={NOTES.reduce((acc, note, index) => ({ ...acc, [index]: note }), {})}
          step={null}
          value={NOTES.indexOf(note)}
          onChange={(value) => setNote(NOTES[value])}
          tooltip={{
            formatter: (value) => NOTES[value],
          }}
          style={{ flex: 1 }}
        />
        <Button onClick={() => handleNoteChange(1)}>
          <UpOutlined />
        </Button>
      </div>

      <div style={{ width: 500, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Typography.Text strong>Select Grades</Typography.Text>
        <Select
          mode="multiple"
          placeholder="Select Grades"
          data-testid="grades-dropdown"
          value={grades}
          onChange={setGrades}
          style={{ flex: 1 }}
          options={Array.from({ length: 7 }, (_, i) => ({
            value: i + 1,
            label: `${i + 1}`,
          }))}
        />
        <Button
          onClick={() => {
            setGrades([]);
            setCommonProgression(null);
          }}
          style={{
            padding: '4px 8px',
            backgroundColor: '#f5222d',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Reset
        </Button>
      </div>

      <div style={{ width: '100%', maxWidth: 600, marginTop: 20 }}>
        <Table
          dataSource={grades.map((grade, index) => ({
            key: index,
            grade,
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
          bordered
        />
      </div>

      <div style={{ width: 300, marginTop: 30, marginBottom: 20 }}>
        <Typography.Text strong>Common Progressions</Typography.Text>
        <Select
          placeholder="Select a progression"
          data-testid="progression-dropdown"
          style={{ width: '100%' }}
          value={commonProgression}
          onChange={(value) => {
            setCommonProgression(value);
            setGrades(PROGRESSIONS[value] || []);
          }}
          options={PROGRESSION_OPTIONS}
        />
      </div>

      <Typography.Paragraph style={{ textAlign: 'justify', marginTop: 30, marginBottom: 30, maxWidth: 600 }}>
        This app helps musicians identify chord progressions in different keys. Select a root note and choose which scale
        degrees (grades) you want to include in your progression. The app will show you the corresponding chords based on
        the harmonic field of the selected key, including major, minor, and diminished chords.
      </Typography.Paragraph>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <a
          href="https://www.thiagocarmonunes.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography.Text italic>
            <TrademarkOutlined />
            {' '}
            powered by Thiaguera</Typography.Text>
        </a>
      </div>
    </div>
  );
}

export default App;
