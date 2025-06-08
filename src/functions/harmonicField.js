const harmonicField = (noteValue, grades) => {
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

  const numericGrade = grades.map(grade => {
    const numericValue = parseInt(grade, 10);
    return isNaN(numericValue) ? grade : numericValue;
  });

  numericGrade.forEach((grade, index) => {
    let suffix = '';
    if ([2, 3, 6].includes(grade)) suffix += 'm';
    if ([7].includes(grade)) suffix += '°';
    scale[grade - 1] += suffix;
  });

  const scaleWithGrades = numericGrade.map(grade => scale[grade - 1] || '');

  const formatedScaleWithGrades = grades.map((grade, index) => {
    let formattedGrade = scaleWithGrades[index];
    const gradeStr = String(grade);
    if (gradeStr.includes('vii')) formattedGrade += '7';
    if (gradeStr.includes('(-m)')) formattedGrade = formattedGrade.replace('m', '');
    if (gradeStr.includes('(m)')) formattedGrade += 'm';
    return formattedGrade;
  });

  return formatedScaleWithGrades;
};

export default harmonicField;
