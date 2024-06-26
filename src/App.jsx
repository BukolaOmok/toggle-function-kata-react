import React from "react";
import items from "./items";
import Tile from "./tile";

export default function App() {
const tileElements = items.map(item => (
<Tile key={[item.id]} item={item} />
));

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px'
};

return (
    <main style={gridStyle}>
        {tileElements}
    </main>
);



}
