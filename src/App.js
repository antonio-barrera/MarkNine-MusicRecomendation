import "./styles.css";
import { useState } from "react";

const rockSongs = {
  "Don´t Cry": "4/5",
  "November Rain": "5/5",
  Thunderstruct: "3/5",
  "Smoke on the Water": "4/5",
  "Stairway to Heaven": "5/5"
};

const romanticSongs = {
  "Wonderful Tonight": "4/5",
  Something: "3/5",
  "God Only Knows": "4/5",
  "We Found Love": "5/5"
};

const hipHopSongs = {
  "Cleanin' Out my Closet": "3.5/5",
  Mockinbird: "3/5",
  "In the Club": "4/5",
  "Lose Yuorself": "5/5",
  "Fight the Power": "3/5"
};

export default function App() {
  const [list, setList] = useState(Object.keys(rockSongs));
  const [object, setObject] = useState(rockSongs);

  function onClickEvent(songsObject) {
    const newList = Object.keys(songsObject);
    setList(newList);
    setObject(songsObject);
  }

  return (
    <div className="App">
      <h1>🎶goodmusic</h1>
      <p>
        Here I have my favorite songs lists. Chose the genre you are interested
        in.
      </p>
      <button onClick={() => onClickEvent(rockSongs)}>Rock</button>
      <button onClick={() => onClickEvent(romanticSongs)}>Romantic</button>
      <button onClick={() => onClickEvent(hipHopSongs)}>Hip Hop</button>
      <hr style={{ marginBottom: "1rem" }} />
      {list.map(function (song) {
        return (
          <div className="song" key={song}>
            <div className="larger">{song}</div>
            <div className="smaller">{object[song]}</div>
          </div>
        );
      })}
    </div>
  );
}
