const fs = require('fs')
const chalk = require('chalk')
const xlsx = require('node-xlsx').default

const config = require('./config.json')
const outputs = require('./outputs.js')

// Create output directory if it doesn't exist
if (!fs.existsSync(config.paths.outputDir)) fs.mkdirSync(config.paths.outputDir)

function compareStrings (strA, strB) {
  const a = strA.toLowerCase()
  const b = strB.toLowerCase()

  if (a < b) return -1
  if (a > b) return 1
  else return 0
}

// Create a more specific file write that also handles errors
// and logs which files were created alongside the input file
function writeFile (output, data) {
  const outputPath = `${config.paths.outputDir}/${output}`

  fs.writeFile(outputPath, data, (err) => {
    if (err) console.log(err)
    console.log(
      chalk.red(config.paths.input) +
      ' -> ' +
      chalk.red.bold(outputPath))
  })
}

const data = fs.readFileSync(config.paths.input, 'utf8')
const songs = data
  .trim()
  .split(config.delimiters.song)
  .map((raw) => {
    const [name, artist] = raw
      .trim()
      .split(config.delimiters.info)
    return { name, artist }
  })
  .sort((a, b) =>
    // Incredibly, this allows us to sort with two conditions
    compareStrings(a.artist, b.artist) || compareStrings(a.name, b.name))

const sheet = xlsx.build([{
  name: 'Songs',
  data: songs.map(({ name, artist }) => [name, artist])
}])

const output = outputs.getOutputs(songs, sheet)
output.forEach(args => writeFile(...args))

console.log(`Created files from ${songs.length} songs`)
