import React from "react";

export default function Tile(props) {
const [showEmoji, setShowEmoji] = React.useState(props.isOn);

function toggleContent() {
    setShowEmoji(showEmoji => !showEmoji);
}

return (
    <div className= "style" onClick={toggleContent}>
      {showEmoji ? props.emoji : props.word}
    </div>
);

}