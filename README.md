# bar-tweaks

Using this repo to store my [Beyond All Reason](https://www.beyondallreason.info/) tweak defs.

## Encoder (JavaScript)

I've included a tool that performs Lua minification and base64 encoding, requires [Node.js](https://nodejs.org/).

After cloning the repo, perform initial setup by running:
```bash
npm install
```

Then you can encode Lua files by using:
```bash
node encode.js my-script.lua
```

## Encoder (Python)

This performs base64 encoding only, minification requires the JavaScript encoder:
```bash
python3 encode.py my-script.lua
```