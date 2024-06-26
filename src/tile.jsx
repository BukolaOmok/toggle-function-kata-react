import React from "react";

export default function Tile(props) {
  const [showEmoji, setShowEmoji] = React.useState(props.isOn);

  const status = showEmoji ? props.emoji : props.word;

  function toggleContent() {
    setShowEmoji((showEmoji) => !showEmoji);
  }

  return (
      <div className="box-style" onClick={toggleContent}>
        <p className="content-style">{status}</p>
      </div>
  );
}
