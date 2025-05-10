const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const progressionKeys = [
  '[1, 2, 3, 4, 5, 6, 7]',
  '[1, 2, 3, 4, 5vii, 6, 7]',
  '[1, 6vii(-m), 2, 5vii]',
  '[1, 6, 2, 5]',
  '[1, 5, 6vii, 4]',
  '[1, 5, 4]',
  '[1, 5, 6, 4]',
  '[1, 4, 6, 5]',
  '[6, 4, 1, 5]',
  '[1, 4, 5]',
  '[1, 6, 4, 5]',
];

const LABELS = {
  '[1, 2, 3, 4, 5, 6, 7]': 'Harmônico Maior',
  '[1, 2, 3, 4, 5vii, 6, 7]': 'Harmônico Maior com 7',
  '[1, 6vii(-m), 2, 5vii]': 'Quadradinho',
  '[1, 5, 4]': 'Study',
  '[1, 5, 6, 4]': 'MPB',
  '[1, 4, 6, 5]': 'MPB',
  '[6, 4, 1, 5]': 'Emo',
  '[1, 4, 5]': 'Sertanejo',
  '[1, 6, 4, 5]': 'Sertanejo',
  '[1, 6, 2, 5]': 'Samba',
  '[1, 5, 6vii, 4]': 'Samba',
};

const PROGRESSIONS = Object.fromEntries(
  progressionKeys.map(key => [key, key.slice(1, -1).split(', ')])
);

const PROGRESSION_OPTIONS = Object.keys(PROGRESSIONS).map(key => ({
  value: key,
  label: `${LABELS[key]}: ${key}`,
}));

export { NOTES, PROGRESSIONS, PROGRESSION_OPTIONS };