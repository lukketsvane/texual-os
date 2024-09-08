interface Stroke {
  type: 'line' | 'curve';
  start: [number, number];
  end: [number, number];
  control?: [number, number];
}

interface CharacterStrokes {
  [key: string]: Stroke[];
}

export const characterStrokes: CharacterStrokes = {
  // Lowercase letters
'a': [
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'line', start: [80, 50], end: [80, 80] },
    { type: 'curve', start: [80, 65], end: [20, 65], control: [50, 90] },
  ],
  'b': [
    { type: 'line', start: [20, 0], end: [20, 100] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 20] },
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 80] },
  ],
  'c': [
    { type: 'curve', start: [80, 30], end: [20, 50], control: [80, 70] },
    { type: 'curve', start: [20, 50], end: [80, 70], control: [20, 80] },
  ],
  'd': [
    { type: 'line', start: [80, 0], end: [80, 100] },
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 80] },
  ],
  'e': [
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'curve', start: [20, 50], end: [80, 70], control: [50, 90] },
    { type: 'line', start: [20, 50], end: [80, 50] },
  ],
  'f': [
    { type: 'line', start: [60, 0], end: [60, 100] },
    { type: 'curve', start: [30, 30], end: [90, 30], control: [60, 10] },
  ],
  'g': [
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 80] },
    { type: 'line', start: [80, 50], end: [80, 120] },
    { type: 'curve', start: [80, 120], end: [20, 120], control: [50, 140] },
  ],
  'h': [
    { type: 'line', start: [20, 0], end: [20, 100] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 20] },
    { type: 'line', start: [80, 50], end: [80, 100] },
  ],
  'i': [
    { type: 'line', start: [50, 30], end: [50, 100] },
    { type: 'curve', start: [45, 15], end: [55, 15], control: [50, 10] },
  ],
  'j': [
    { type: 'line', start: [60, 30], end: [60, 120] },
    { type: 'curve', start: [60, 120], end: [20, 120], control: [40, 140] },
    { type: 'curve', start: [55, 15], end: [65, 15], control: [60, 10] },
  ],
  'k': [
    { type: 'line', start: [20, 0], end: [20, 100] },
    { type: 'line', start: [20, 60], end: [80, 30] },
    { type: 'line', start: [40, 60], end: [80, 90] },
  ],
  'l': [
    { type: 'line', start: [50, 0], end: [50, 100] },
  ],
  'm': [
    { type: 'line', start: [20, 100], end: [20, 50] },
    { type: 'curve', start: [20, 50], end: [50, 50], control: [35, 20] },
    { type: 'line', start: [50, 50], end: [50, 100] },
    { type: 'curve', start: [50, 50], end: [80, 50], control: [65, 20] },
    { type: 'line', start: [80, 50], end: [80, 100] },
  ],
  'n': [
    { type: 'line', start: [20, 100], end: [20, 50] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 20] },
    { type: 'line', start: [80, 50], end: [80, 100] },
  ],
  'o': [
    { type: 'curve', start: [50, 30], end: [50, 90], control: [90, 60] },
    { type: 'curve', start: [50, 90], end: [50, 30], control: [10, 60] },
  ],
  'p': [
    { type: 'line', start: [20, 30], end: [20, 120] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 20] },
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 80] },
  ],
  'q': [
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 80] },
    { type: 'line', start: [80, 50], end: [80, 120] },
  ],
  'r': [
    { type: 'line', start: [20, 100], end: [20, 50] },
    { type: 'curve', start: [20, 50], end: [80, 50], control: [50, 20] },
  ],
  's': [
    { type: 'curve', start: [80, 40], end: [20, 40], control: [80, 80] },
    { type: 'curve', start: [20, 80], end: [80, 80], control: [20, 40] },
  ],
  't': [
    { type: 'line', start: [50, 10], end: [50, 100] },
    { type: 'curve', start: [30, 30], end: [70, 30], control: [50, 20] },
  ],
  'u': [
    { type: 'line', start: [20, 30], end: [20, 80] },
    { type: 'curve', start: [20, 80], end: [80, 80], control: [50, 110] },
    { type: 'line', start: [80, 80], end: [80, 30] },
  ],
  'v': [
    { type: 'line', start: [20, 30], end: [50, 100] },
    { type: 'line', start: [50, 100], end: [80, 30] },
  ],
  'w': [
    { type: 'line', start: [10, 30], end: [30, 100] },
    { type: 'line', start: [30, 100], end: [50, 60] },
    { type: 'line', start: [50, 60], end: [70, 100] },
    { type: 'line', start: [70, 100], end: [90, 30] },
  ],
  'x': [
    { type: 'line', start: [20, 30], end: [80, 100] },
    { type: 'line', start: [20, 100], end: [80, 30] },
  ],
  'y': [
    { type: 'line', start: [20, 30], end: [50, 100] },
    { type: 'line', start: [50, 100], end: [80, 30] },
    { type: 'curve', start: [50, 100], end: [20, 140], control: [20, 120] },
  ],
  'z': [
    { type: 'line', start: [20, 30], end: [80, 30] },
    { type: 'line', start: [80, 30], end: [20, 100] },
    { type: 'line', start: [20, 100], end: [80, 100] },
  ],
  'æ': [
    { type: 'curve', start: [30, 50], end: [10, 50], control: [20, 30] },
    { type: 'line', start: [30, 50], end: [30, 80] },
    { type: 'curve', start: [30, 65], end: [10, 65], control: [20, 80] },
    { type: 'curve', start: [50, 50], end: [70, 50], control: [60, 30] },
    { type: 'curve', start: [70, 50], end: [90, 50], control: [80, 70] },
    { type: 'line', start: [50, 50], end: [90, 50] },
  ],
  'ø': [
    { type: 'curve', start: [50, 30], end: [50, 90], control: [90, 60] },
    { type: 'curve', start: [50, 90], end: [50, 30], control: [10, 60] },
    { type: 'line', start: [20, 100], end: [80, 20] },
  ],
  'å': [
    { type: 'curve', start: [80, 50], end: [20, 50], control: [50, 20] },
    { type: 'line', start: [80, 50], end: [80, 80] },
    { type: 'curve', start: [80, 65], end: [20, 65], control: [50, 90] },
    { type: 'curve', start: [45, 15], end: [55, 15], control: [50, 10] },
    { type: 'curve', start: [55, 15], end: [45, 15], control: [50, 20] },
  ],
  // Uppercase letters
  'A': [
    { type: 'line', start: [0, 100], end: [50, 0] },
    { type: 'line', start: [50, 0], end: [100, 100] },
    { type: 'line', start: [25, 50], end: [75, 50] },
  ],
  'B': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'curve', start: [0, 0], end: [100, 25], control: [100, 0] },
    { type: 'curve', start: [100, 25], end: [0, 50], control: [100, 50] },
    { type: 'curve', start: [0, 50], end: [100, 75], control: [100, 50] },
    { type: 'curve', start: [100, 75], end: [0, 100], control: [100, 100] },
  ],
  'C': [
    { type: 'curve', start: [100, 20], end: [0, 50], control: [100, 80] },
    { type: 'curve', start: [0, 50], end: [100, 80], control: [0, 100] },
  ],
  'D': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'curve', start: [0, 0], end: [0, 100], control: [100, 50] },
  ],
  'E': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'line', start: [0, 0], end: [100, 0] },
    { type: 'line', start: [0, 50], end: [75, 50] },
    { type: 'line', start: [0, 100], end: [100, 100] },
  ],
  'F': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'line', start: [0, 0], end: [100, 0] },
    { type: 'line', start: [0, 50], end: [75, 50] },
  ],
  'G': [
    { type: 'curve', start: [100, 20], end: [0, 50], control: [100, 80] },
    { type: 'curve', start: [0, 50], end: [100, 80], control: [0, 100] },
    { type: 'line', start: [100, 80], end: [100, 50] },
    { type: 'line', start: [100, 50], end: [50, 50] },
  ],
  'H': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'line', start: [100, 0], end: [100, 100] },
    { type: 'line', start: [0, 50], end: [100, 50] },
  ],
  'I': [
    { type: 'line', start: [50, 0], end: [50, 100] },
    { type: 'line', start: [25, 0], end: [75, 0] },
    { type: 'line', start: [25, 100], end: [75, 100] },
  ],
  'J': [
    { type: 'line', start: [75, 0], end: [75, 75] },
    { type: 'curve', start: [75, 75], end: [0, 75], control: [0, 125] },
  ],
  'K': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'line', start: [0, 50], end: [100, 0] },
    { type: 'line', start: [25, 50], end: [100, 100] },
  ],
  'L': [
    { type: 'line', start: [0, 0], end: [0, 100] },
    { type: 'line', start: [0, 100], end: [100, 100] },
  ],
  'M': [
    { type: 'line', start: [0, 100], end: [0, 0] },
    { type: 'line', start: [0, 0], end: [50, 100] },
    { type: 'line', start: [50, 100], end: [100, 0] },
    { type: 'line', start: [100, 0], end: [100, 100] },
  ],
  'N': [
    { type: 'line', start: [0, 100], end: [0, 0] },
    { type: 'line', start: [0, 0], end: [100, 100] },
    { type: 'line', start: [100, 100], end: [100, 0] },
  ],
  'O': [
    { type: 'curve', start: [50, 0], end: [50, 100], control: [100, 50] },
    { type: 'curve', start: [50, 100], end: [50, 0], control: [0, 50] },
  ],
  'P': [
    { type: 'line', start: [0, 100], end: [0, 0] },
    { type: 'curve', start: [0, 0], end: [100, 25], control: [100, 0] },
    { type: 'curve', start: [100, 25], end: [0, 50], control: [100, 50] },
  ],
  'Q': [
    { type: 'curve', start: [50, 0], end: [50, 100], control: [100, 50] },
    { type: 'curve', start: [50, 100], end: [50, 0], control: [0, 50] },
    { type: 'line', start: [75, 75], end: [100, 100] },
  ],
  'R': [
    { type: 'line', start: [0, 100], end: [0, 0] },
    { type: 'curve', start: [0, 0], end: [100, 25], control: [100, 0] },
    { type: 'curve', start: [100, 25], end: [0, 50], control: [100, 50] },
    { type: 'line', start: [50, 50], end: [100, 100] },
  ],
  'S': [
    { type: 'curve', start: [100, 25], end: [0, 25], control: [100, 75] },
    { type: 'curve', start: [0, 75], end: [100, 75], control: [0, 25] },
  ],
  'T': [
    { type: 'line', start: [50, 0], end: [50, 100] },
    { type: 'line', start: [0, 0], end: [100, 0] },
  ],
  'U': [
    { type: 'line', start: [0, 0], end: [0, 75] },
    { type: 'curve', start: [0, 75], end: [100, 75], control: [50, 125] },
    { type: 'line', start: [100, 75], end: [100, 0] },
  ],
  'V': [
    { type: 'line', start: [0, 0], end: [50, 100] },
    { type: 'line', start: [50, 100], end: [100, 0] },
  ],
  'W': [
    { type: 'line', start: [0, 0], end: [25, 100] },
    { type: 'line', start: [25, 100], end: [50, 25] },
    { type: 'line', start: [50, 25], end: [75, 100] },
    { type: 'line', start: [75, 100], end: [100, 0] },
  ],
  'X': [
    { type: 'line', start: [0, 0], end: [100, 100] },
    { type: 'line', start: [0, 100], end: [100, 0] },
  ],
  'Y': [
    { type: 'line', start: [0, 0], end: [50, 50] },
    { type: 'line', start: [100, 0], end: [50, 50] },
    { type: 'line', start: [50, 50], end: [50, 100] },
  ],
  'Z': [
    { type: 'line', start: [0, 0], end: [100, 0] },
    { type: 'line', start: [100, 0], end: [0, 100] },
    { type: 'line', start: [0, 100], end: [100, 100] },
  ],

  // Numbers
  '0': [
    { type: 'curve', start: [50, 0], end: [50, 100], control: [100, 50] },
    { type: 'curve', start: [50, 100], end: [50, 0], control: [0, 50] },
  ],
  '1': [
    { type: 'line', start: [25, 25], end: [50, 0] },
    { type: 'line', start: [50, 0], end: [50, 100] },
    { type: 'line', start: [25, 100], end: [75, 100] },
  ],
  '2': [
    { type: 'curve', start: [0, 25], end: [100, 25], control: [50, -25] },
    { type: 'curve', start: [100, 25], end: [0, 100], control: [100, 100] },
    { type: 'line', start: [0, 100], end: [100, 100] },
  ],
  '3': [
    { type: 'curve', start: [0, 25], end: [100, 25], control: [50, -25] },
    { type: 'curve', start: [100, 25], end: [100, 75], control: [125, 50] },
    { type: 'curve', start: [100, 75], end: [0, 75], control: [50, 125] },
  ],
  '4': [
    { type: 'line', start: [75, 0], end: [0, 75] },
    { type: 'line', start: [0, 75], end: [100, 75] },
    { type: 'line', start: [75, 0], end: [75, 100] },
  ],
  '5': [
    { type: 'line', start: [100, 0], end: [0, 0] },
    { type: 'line', start: [0, 0], end: [0, 50] },
    { type: 'curve', start: [0, 50], end: [100, 50], control: [50, 0] },
    { type: 'curve', start: [100, 50], end: [0, 100], control: [100, 100] },
  ],
  '6': [
    { type: 'curve', start: [100, 25], end: [0, 50], control: [0, 0] },
    { type: 'curve', start: [0, 50], end: [50, 100], control: [0, 100] },
    { type: 'curve', start: [50, 100], end: [50, 50], control: [100, 75] },
  ],
  '7': [
    { type: 'line', start: [0, 0], end: [100, 0] },
    { type: 'line', start: [100, 0], end: [25, 100] },
  ],
  '8': [
    { type: 'curve', start: [50, 0], end: [50, 50], control: [100, 25] },
    { type: 'curve', start: [50, 50], end: [50, 0], control: [0, 25] },
    { type: 'curve', start: [50, 50], end: [50, 100], control: [100, 75] },
    { type: 'curve', start: [50, 100], end: [50, 50], control: [0, 75] },
  ],
  '9': [
    { type: 'curve', start: [50, 0], end: [50, 50], control: [100, 25] },
    { type: 'curve', start: [50, 50], end: [50, 0], control: [0, 25] },
    { type: 'curve', start: [50, 50], end: [0, 75], control: [100, 100] },
  ],

  // Punctuation
  '.': [
    { type: 'curve', start: [45, 90], end: [55, 90], control: [50, 85] },
    { type: 'curve', start: [55, 90], end: [45, 90], control: [50, 95] },
  ],
  ',': [
    { type: 'curve', start: [45, 90], end: [55, 90], control: [50, 85] },
    { type: 'curve', start: [55, 90], end: [45, 110], control: [50, 100] },
  ],
  '!': [
    { type: 'line', start: [50, 0], end: [50, 75] },
    { type: 'curve', start: [45, 90], end: [55, 90], control: [50, 85] },
    { type: 'curve', start: [55, 90], end: [45, 90], control: [50, 95] },
  ],
  '?': [
    { type: 'curve', start: [0, 25], end: [100, 25], control: [50, -25] },
    { type: 'curve', start: [100, 25], end: [50, 75], control: [100, 75] },
    { type: 'line', start: [50, 75], end: [50, 85] },
    { type: 'curve', start: [45, 95], end: [55, 95], control: [50, 90] },
    { type: 'curve', start: [55, 95], end: [45, 95], control: [50, 100] },
  ],
};

export function getCharacterStrokes(char: string): Stroke[] {
  return characterStrokes[char] || characterStrokes[char.toLowerCase()] || [];
}

export function getRandomVariation(character: string): Stroke[] {
  const strokes = getCharacterStrokes(character);
  if (strokes.length === 0) return [];
  
  // Add some randomness to the strokes
  return strokes.map(stroke => ({
    ...stroke,
    start: [stroke.start[0] + Math.random() * 5 - 2.5, stroke.start[1] + Math.random() * 5 - 2.5],
    end: [stroke.end[0] + Math.random() * 5 - 2.5, stroke.end[1] + Math.random() * 5 - 2.5],
    control: stroke.control ? [stroke.control[0] + Math.random() * 5 - 2.5, stroke.control[1] + Math.random() * 5 - 2.5] : undefined,
  }));
}