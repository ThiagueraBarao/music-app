import harmonicField from './harmonicField';

describe('harmonicField', () => {

    const harmonicFields = {
        C: ["C", "Dm", "Em", "F", "G", "Am", "B°"],
        D: ["D", "Em", "F#m", "G", "A", "Bm", "C#°"],
        E: ["E", "F#m", "G#m", "A", "B", "C#m", "D#°"],
        F: ["F", "Gm", "Am", "A#", "C", "Dm", "E°"],
        G: ["G", "Am", "Bm", "C", "D", "Em", "F#°"],
        A: ["A", "Bm", "C#m", "D", "E", "F#m", "G#°"],
        B: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#°"]
    };

    it.each(Object.entries(harmonicFields))(
        'should return the correct harmonic field for %s',
        (note, expectedField) => {
            const result = harmonicField(note, [1, 2, 3, 4, 5, 6, 7]);
            expect(result).toEqual(expectedField);
        }
    );


});