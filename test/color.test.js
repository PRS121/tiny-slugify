import { test } from 'node:test';
import assert from 'node:assert/strict';
import colorHelper from '@quarantine-lab/color-helper';
import { slugify } from '../src/index.js';

// Exercises the (dev) dependency the Detonation Chamber detonates before every release.
test('colorize wraps the slug in ANSI escapes', () => {
  const slug = slugify('Release Captain');
  const out = colorHelper.colorize(slug, 'green');
  assert.ok(out.includes(slug), 'output should contain the slug');
  assert.ok(out.includes('\u001b['), 'output should contain an ANSI escape');
});
