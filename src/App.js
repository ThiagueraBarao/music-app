import { useState, useEffect } from 'react';
import { Typography, Select, Slider, Table } from 'antd';
import './App.css';
import { TikTokOutlined, TrademarkOutlined } from '@ant-design/icons';
import harmonicField from './functions/functions';

const { Title } = Typography;

function App() {

  const [note, setNote] = useState('C');
  const [field, setField] = useState([]);
  const [grades, setGrades] = useState([1, 5, 4]);

  const getHarmonicField = (noteValue) => {
    setField(harmonicField(noteValue, grades))
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
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}>
        <TikTokOutlined /> Thiaguera Music App
      </Title>

      <div style={{ width: 300, marginBottom: 20 }}>
        <Typography.Text strong>Select Note</Typography.Text>
        <Slider
          min={0}
          max={6}
          marks={{
            0: 'C',
            1: 'D',
            2: 'E',
            3: 'F',
            4: 'G',
            5: 'A',
            6: 'B',
          }}
          step={null}
          value={['C', 'D', 'E', 'F', 'G', 'A', 'B'].indexOf(note)}
          onChange={(value) => setNote(['C', 'D', 'E', 'F', 'G', 'A', 'B'][value])}
        />
      </div>

      <div style={{ width: 300, marginBottom: 20 }}>
        <Typography.Text strong>Select Grades</Typography.Text>
        <Select
          mode="multiple"
          placeholder="Select Grades"
          value={grades}
          onChange={setGrades}
          style={{ width: '100%' }}
          options={Array.from({ length: 7 }, (_, i) => ({
            value: i + 1,
            label: `${i + 1}`,
          }))}
        />
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
          style={{ width: '100%' }}
          onChange={(value) => {
            const progressions = {
              '[1, 5, 6, 4]': [1, 5, 6, 4],
              '[1, 4, 6, 5]': [1, 4, 6, 5],
              '[6, 4, 1, 5]': [6, 4, 1, 5],
              '[1, 4, 5]': [1, 4, 5],
              '[1, 6, 4, 5]': [1, 6, 4, 5],
              '[1, 6, 2, 5]': [1, 6, 2, 5],
            };
            setGrades(progressions[value] || []);
          }}
          options={[
            { value: '[1, 5, 6, 4]', label: 'MPB: [1, 5, 6, 4]' },
            { value: '[1, 4, 6, 5]', label: 'MPB: [1, 4, 6, 5]' },
            { value: '[6, 4, 1, 5]', label: 'Emo: [6, 4, 1, 5]' },
            { value: '[1, 4, 5]', label: 'Sertanejo: [1, 4, 5]' },
            { value: '[1, 6, 4, 5]', label: 'Sertanejo: [1, 6, 4, 5]' },
            { value: '[1, 6, 2, 5]', label: 'Samba: [1, 6, 2, 5]' },
            { value: '[1, 5, 6, 4]', label: 'Samba: [1, 5, 6, 4]' },
          ]}
        />
      </div>

      <Typography.Paragraph style={{ textAlign: 'justify', marginTop: 30 ,marginBottom: 30, maxWidth: 600 }}>
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
