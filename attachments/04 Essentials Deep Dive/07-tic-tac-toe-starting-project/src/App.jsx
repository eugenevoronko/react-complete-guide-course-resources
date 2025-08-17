import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PlayerOne = "X";
const PlayerTwo = "O";

function deriveActivePlayer(turns) {
    let activePlayer = PlayerOne;

    if (turns.length > 0 && turns[0].player === PlayerOne) {
        activePlayer = PlayerTwo;
    }

    return activePlayer;
}

function App() {
    // const [activePlayer, setActivePlayer] = useState(PlayerOne);
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((prevPlayer) =>
        //     prevPlayer === PlayerOne ? PlayerTwo : PlayerOne
        // );

        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
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
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
