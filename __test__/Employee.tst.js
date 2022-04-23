const Letter = require('../lib/Letter');

describe('Visibility', () => {
  it('Characters that are digits or letters should not be visible', () => {
    expect(new Letter('j').visible).toBe(false);
  });