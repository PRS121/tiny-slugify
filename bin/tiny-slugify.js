#!/usr/bin/env node
import chalk from 'chalk';
import createDebug from 'debug';
import { slugify } from '../src/index.js';

const debug = createDebug('tiny-slugify');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(chalk.yellow('usage: tiny-slugify <text> [more text ...]'));
  process.exit(1);
}

for (const arg of args) {
  debug('slugifying %o', arg);
  console.log(chalk.green(slugify(arg)));
}
