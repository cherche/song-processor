const fs = require('fs')
const chalk = require('chalk')

const config = require('./config.json')

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) fs.mkdirSync(config.outputDir)

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
  const outputPath = `${config.outputDir}/${output}`

  fs.writeFile(outputPath, data, (err) => {
    if (err) console.log(err)
    console.log(
      chalk.red(config.input)
      + ' -> '
      + chalk.red.bold(outputPath))
  })
}

const data = fs.readFileSync(config.input, 'utf8')
const songs = data
  .split('\n')
  .map((raw) => {
    // Copying over from Excel happened to add a carriage return at the end
    // No idea why, but this solves that
    const [name, artist] = raw.replace(/\r/gi, '').split(' – ')
    return { name, artist }})
  // Incredibly, this allows us to sort with two conditions
  // Quite elegant
  .sort((a, b) =>
    compareStrings(a.artist, b.artist) || compareStrings(a.name, b.name))

writeFile('songs.json', JSON.stringify({songs}, null, 2))

writeFile('names.txt', songs.map(song => song.name).join('\n'))
writeFile('artists.txt', songs.map(song => song.artist).join('\n'))
