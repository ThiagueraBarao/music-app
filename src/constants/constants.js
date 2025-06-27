const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const PROGRESSIONS_DATA = [
  { key: '[1, 2, 3, 4, 5, 6, 7]', label: 'Harmônico Maior' },
  { key: '[1, 2, 3, 4, 5vii, 6, 7]', label: 'Harmônico Maior com 7' },
  { key: '[1, 6vii(-m), 2, 5vii]', label: 'Quadradinho' },
  { key: '[1, 6, 2, 5]', label: 'Samba 1' },
  { key: '[1, 5, 6vii, 4]', label: 'Samba 2' },
  { key: '[2vii, 5vii, 1vii]', label: 'Samba - Cadência 2-5-1 (Clássica)' },
  { key: '[1, 6vii, 2vii, 5vii]', label: 'Samba - Cadência Cíclica (Turnaround)' },
  { key: '[1, 6, 4, 5vii]', label: 'Samba - Cadência Romântica (Pagode 90)' },
  { key: '[1, 3vii(-m), 6, 2vii(-m), 5vii, 1]', label: 'Samba - Encadeamento Tradicional (Choro)' },
  { key: '[6vii(-m), 2vii , 5vii, 1]', label: 'Samba - Cadência com Dominante Secundário' },
  { key: '[1, 2vii(-m), 4, 4(m), 1]', label: 'Samba - Cadência com IV menor (Modal)' },
  { key: '[1, 7(-°)(b), 4, 5]', label: 'Samba - Cadência Modal (Groove)' },
  { key: '[1, 1vii, 4, 4(m), 1]', label: 'Samba - Cadência Clássica Brasileira (Pagode)' },
  { key: '[1, 6, 2vii, 5vii, 1v]', label: 'Samba - Cadência Circular com VI menor' },
  { key: '[1, 5, 4]', label: 'Study' },
  { key: '[1, 1vii, 4, 4(m)]', label: 'Pagode 4' },
  { key: '[1, 5, 6, 4]', label: 'MPB' },
  { key: '[1, 4, 6, 5]', label: 'MPB' },
  { key: '[6, 4, 1, 5]', label: 'Emo' },
  { key: '[1, 4, 5]', label: 'Sertanejo' },
  { key: '[1, 6, 4, 5]', label: 'Sertanejo' },
];

const PROGRESSIONS = Object.fromEntries(
  PROGRESSIONS_DATA.map(({ key }) => [key, key.slice(1, -1).split(', ')])
);

const PROGRESSION_OPTIONS = PROGRESSIONS_DATA.map(({ key, label }, index) => ({
  value: key,
  label: `${index + 1}. ${label}: ${key}`,
}));

export { NOTES, PROGRESSIONS, PROGRESSION_OPTIONS };
