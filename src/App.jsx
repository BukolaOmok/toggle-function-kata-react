
import { useState } from "react";
import items from "./items";
import Tile from "./tile";
import "./App.css";

export default function App() {
  const [tilings, setTilings] = useState(items);
 
  const tileElements = tilings.map((tiling) => (
    <Tile 
    key={tile.id} 
    word = {tile.word}
    emoji = {tile.emoji}
    isOn={tile.isOn} 
    />
  ));

  return <main>{tileElements}</main>;
}
