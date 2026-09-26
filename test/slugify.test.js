import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('lowercases and hyphenates', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('collapses separators and trims ends', () => {
  assert.equal(slugify('  Foo   Bar!! '), 'foo-bar');
});

test('strips diacritics', () => {
  assert.equal(slugify('Crème Brûlée'), 'creme-brulee');
});

test('handles empty and nullish input', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify(null), '');
  assert.equal(slugify(undefined), '');
});

test('respects maxLength without a trailing separator', () => {
  assert.equal(slugify('one two three', { maxLength: 7 }), 'one-two');
});

test('honours a custom separator', () => {
  assert.equal(slugify('Release Captain', { separator: '_' }), 'release_captain');
});
