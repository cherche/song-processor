# song-processor

An example of using node for automating daily tasks.

## Usage

You can get a list of your Spotify songs by highlighting all of the songs in your "Songs" list in the application and dragging them into an Excel spreadsheet. You may copy this list out into the `songs.txt` file, but notice that the song name and artist are inconveniently delimited by en dashes.

`./songs.txt`:
```
Yellow – Coldplay
The Winner Takes It All – ABBA
Stand By Me – Ben E. King
The Sound of Silence – Simon & Garfunkel
Africa – Toto
Bohemian Rhapsody – Queen
```

This little app takes this plain-text list and sorts it by artist, then song name. It then writes four files:

- `songs.json`
- `songs.xlsx`
- `names.txt`
- `artists.txt`

`./output/songs.json`:
```json
{
  "songs": [
    {
      "name": "The Winner Takes It All",
      "artist": "ABBA"
    },
    {
      "name": "Stand By Me",
      "artist": "Ben E. King"
    },
    {
      "name": "Yellow",
      "artist": "Coldplay"
    },
    {
      "name": "Bohemian Rhapsody",
      "artist": "Queen"
    },
    {
      "name": "The Sound of Silence",
      "artist": "Simon & Garfunkel"
    },
    {
      "name": "Africa",
      "artist": "Toto"
    }
  ]
}
```

Once you have replaced the songs within the `songs.txt` with whatever songs you have, simply run the application.

```bash
node index.js
```

Also, don't criticize my taste in music.
