import React, { useState } from "react";
import { animalEmojiDictionary } from "./animalEmoji";
import "./styles.css";

const headingText = "Simple animal interpreter";
const animalEmojis = Object.keys(animalEmojiDictionary);

export default function App() {
  let [emoji, setName] = useState("");

  function animalEmojiInputHandler(event) {
    emoji = event.target.value;
    if (emoji in animalEmojiDictionary) setName(animalEmojiDictionary[emoji]);
    else if (emoji.length === 0) setName("");
    else
      setName("The following emoji / data is not available in our database !");
  }

  function displayEmojiName(emoji) {
    setName(animalEmojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      {emoji.length !== 0 ? (
        <div className="animal-name">{emoji}</div>
      ) : (
        <div className="animal-name" style={{ display: "none" }}>
          {emoji}
        </div>
      )}
      <input
        type="text"
        onChange={animalEmojiInputHandler}
        placeholder="Paste any animal emoji here or select any emoji below !"
      />
      <div className="emojis">
        {animalEmojis.map(function (emoji) {
          return (
            <span
              key={emoji}
              className="emoji"
              onClick={() => displayEmojiName(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
