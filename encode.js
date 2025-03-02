#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const luamin = require('luamin');

function main() {
  if (process.argv.length < 3) {
    console.error('Usage: node encode.js <lua_file>');
    process.exit(1);
  }

  const filePath = process.argv[2];
  let luaCode;

  try {
    luaCode = fs.readFileSync(path.resolve(filePath), 'utf8');
  } catch (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }

  // Capture the first line if it's a Lua comment
  // (i.e., it starts with `--` or `--<space>`)
  let firstLineComment = '';
  let lines = luaCode.split(/\r?\n/);

  if (lines.length > 0 && lines[0].trim().startsWith('--')) {
    // Store that first line (including a newline) and remove it from the main script
    firstLineComment = lines[0] + '\n';
    lines.shift();
    // Rejoin the remaining lines for parsing
    luaCode = lines.join('\n');
  }

  // Minify the Lua code
  let minified;
  try {
    minified = luamin.minify(luaCode);
  } catch (err) {
    console.error('Error minifying Lua code:', err.message);
    process.exit(1);
  }

  // Add back the first-line comment (if any)
  const finalLua = firstLineComment + minified;

  // Base64-encode the minified code
  let encoded = Buffer.from(finalLua).toString('base64');

  // Remove all "=" characters
  encoded = encoded.replace(/=/g, '');

  // Print the encoded string
  console.log(encoded);
}

main();