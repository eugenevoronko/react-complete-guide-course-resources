import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
    const PlayerOne = "X";
    const PlayerTwo = "O";
    const [activePlayer, setActivePlayer] = useState(PlayerOne);
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((prevPlayer) =>
            prevPlayer === PlayerOne ? PlayerTwo : PlayerOne
        );
        setGameTurns((prevTurns) => {
            let currentPlayer = PlayerOne;

            if (activePlayer === PlayerOne) {
                currentPlayer = PlayerTwo;
            }

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
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
                    turns={gameTurns}
                />
                <Log />
            </div>
        </main>
    );
}

export default App;
