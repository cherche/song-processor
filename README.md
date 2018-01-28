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

This little app takes this plain-text list and sorts it by artist, then song name. By default, it will output these four files:

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

First, clone the respository and change to the directory. You will then want to install all of the npm dependencies.

```bash
git clone https://github.com/cherche/song-processor.git
cd song-processor
npm install
```

Now, you can change any of the settings in `config.json` and `outputs.js`, then replace the `songs.txt` file with a list of your songs.

```bash
node index.js
```

Also, don't criticize my taste in music.
