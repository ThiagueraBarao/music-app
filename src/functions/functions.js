const harmonicField = (noteValue,grades) => {
    const notesScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const majorScaleIntervals = [2, 2, 1, 2, 2, 2];

    const startIndex = notesScale.indexOf(noteValue);
    const scale = [notesScale[startIndex]];
    if (startIndex === -1) return;
    let currentIndex = startIndex;
    majorScaleIntervals.forEach(interval => {
      currentIndex = (currentIndex + interval) % notesScale.length;
      scale.push(notesScale[currentIndex]);
    });

    [1, 2, 5].forEach(index => {
      scale[index] += 'm';
    });
    [6].forEach(index => {
      scale[index] += '°';
    });

    const scaleWithGrades = grades.map(grade => scale[grade - 1] || '');

    return scaleWithGrades;
  };

  export default harmonicField;