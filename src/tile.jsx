import React from "react";

export default function Tile({ item }) {
const [showEmoji, setShowEmoji] = React.useState(false);
const styles = {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    margin: '10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    backgroundColor: showEmoji ? '#FFD700' : '#ADD8E6'
};

function toggle() {
    setShowEmoji(prev => !prev);
}

return (
    <div style={styles} onClick={toggle}>
        {showEmoji ? item.emoji : item.word}
    </div>
);

}