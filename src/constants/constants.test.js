import { NOTES, PROGRESSION_OPTIONS } from './constants';

describe('constants.js', () => {
    describe('NOTES', () => {
        it('should contain the correct musical notes', () => {
            expect(NOTES).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
        });
    });

    describe('PROGRESSION_OPTIONS', () => {
        it('should correctly generate progression options with labels and values', () => {
            expect(PROGRESSION_OPTIONS).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ value: '[1, 2, 3, 4, 5, 6, 7]', label: '1. Harmônico Maior: [1, 2, 3, 4, 5, 6, 7]' }),
                    expect.objectContaining({ value: '[1, 2, 3, 4, 5vii, 6, 7]', label: '2. Harmônico Maior com 7: [1, 2, 3, 4, 5vii, 6, 7]' }),
                    expect.objectContaining({ value: '[1, 6vii(-m), 2, 5vii]', label: '3. Quadradinho: [1, 6vii(-m), 2, 5vii]' }),
                    expect.objectContaining({ value: '[1, 6, 2, 5]', label: '4. Samba 1: [1, 6, 2, 5]' }),
                    expect.objectContaining({ value: '[1, 5, 6vii, 4]', label: '5. Samba 2: [1, 5, 6vii, 4]' }),
                ])
            );
        });
    });
});