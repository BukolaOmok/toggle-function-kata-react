import React from "react";
import items from "./items";
import Tile from "./tile";
import "./App.css";

export default function App() {
  const [tilings, setTilings] = React.useState(items);
 
  const tileContents = tilings.map((tiling) => (
    <Tile 
    key={tiling.id} 
    word = {tiling.word}
    emoji = {tiling.emoji}
    isOn={tiling.isOn} 
    />
  ));

  return <main>
    <p>{tileContents}</p>
    </main>;
}
