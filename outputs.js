exports.getOutputs = (songs, sheet) => [
  ['songs.json', JSON.stringify({ songs }, null, 2)],
  ['songs.xlsx', sheet],g
  ['names.txt', songs.map(song => song.name).join('\n')],
  ['artists.txt', songs.map(song => song.artist).join('\n')]
]
