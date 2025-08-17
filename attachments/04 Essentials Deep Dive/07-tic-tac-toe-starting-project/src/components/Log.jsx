export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={`${turn.square.row}-${turn.square.col}`}>
                    <p>
                        Turn {index + 1}: {turn.player} selected{" "}
                        {turn.square.row}, {turn.square.col}.
                    </p>
                </li>
            ))}
        </ol>
    );
}
