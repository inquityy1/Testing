const { generateText } = require('./util');

test('should output name and age', () => {
	const text = generateText('Max', 29);
	expect(text).toBe('Max (29 years old)');
	const text = generateText('Anna', 28);
	expect(text).toBe('Anna (28 years old)');
});

test('should data-less text' () => {
	const text = generateText();
	expect(text).toBe('undefined (undefined years old)');
})