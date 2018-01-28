exports.getOutput = (songs, sheet) => {
  return [
    ['songs.json', JSON.stringify({ songs }, null, 2)],
    ['songs.xlsx', sheet],
    ['names.txt', songs.map(song => song.name).join('\n')],
    ['artists.txt', songs.map(song => song.artist).join('\n')]
  ]
}
