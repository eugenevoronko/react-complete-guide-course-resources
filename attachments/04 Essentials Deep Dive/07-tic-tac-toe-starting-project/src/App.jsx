import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
    const PlayerOne = "X";
    const PlayerTwo = "O";
    const [activePlayer, setActivePlayer] = useState(PlayerOne);

    function handleSelectSquare() {
        setActivePlayer((prevPlayer) =>
            prevPlayer === PlayerOne ? PlayerTwo : PlayerOne
        );
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol={PlayerOne}
                        isActive={activePlayer === PlayerOne}
                    />
                    <Player
                        initialName="Player 2"
                        symbol={PlayerTwo}
                        isActive={activePlayer === PlayerTwo}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
            </div>
        </main>
    );
}

export default App;
