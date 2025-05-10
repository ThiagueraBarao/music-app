const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const PROGRESSIONS = {
  '[1, 2, 3, 4, 5, 6, 7]': [1, 2, 3, 4, 5, 6, 7],
  '[1, 5, 4]' : [1, 5, 4],
  '[1, 5, 6, 4]': [1, 5, 6, 4],
  '[1, 4, 6, 5]': [1, 4, 6, 5],
  '[6, 4, 1, 5]': [6, 4, 1, 5],
  '[1, 4, 5]': [1, 4, 5],
  '[1, 6, 4, 5]': [1, 6, 4, 5],
  '[1, 6, 2, 5]': [1, 6, 2, 5],
};

const PROGRESSION_OPTIONS = [
  { value: '[1, 2, 3, 4, 5, 6, 7]', label: 'Harmônico Maior: [1, 2, 3, 4, 5, 6, 7]' },
  { value: '[1, 5, 4]', label: 'Study: [1, 5, 4]' },
  { value: '[1, 5, 6, 4]', label: 'MPB: [1, 5, 6, 4]' },
  { value: '[1, 4, 6, 5]', label: 'MPB: [1, 4, 6, 5]' },
  { value: '[6, 4, 1, 5]', label: 'Emo: [6, 4, 1, 5]' },
  { value: '[1, 4, 5]', label: 'Sertanejo: [1, 4, 5]' },
  { value: '[1, 6, 4, 5]', label: 'Sertanejo: [1, 6, 4, 5]' },
  { value: '[1, 6, 2, 5]', label: 'Samba: [1, 6, 2, 5]' },
  { value: '[1, 5, 6, 4]', label: 'Samba: [1, 5, 6, 4]' },
];

export { NOTES, PROGRESSIONS, PROGRESSION_OPTIONS };