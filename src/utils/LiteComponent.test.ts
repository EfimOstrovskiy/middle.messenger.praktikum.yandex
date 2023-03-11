import { compileComponent } from './LiteComponent';

describe('LiteComponent', () => {
  const template = `<p>{#text#}</p>`;
  const text = 'Test success!';

  test('compile', () => {
    const result = compileComponent(template, { text });

    expect(result).toBe(`<p>${text}</p>`);
  });
});
