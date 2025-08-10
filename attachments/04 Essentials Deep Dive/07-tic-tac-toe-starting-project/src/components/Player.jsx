import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    const playerName = isEditing ? (
        <input type="text" required value={name} onChange={handleChange} />
    ) : (
        <span className="player-name">{name}</span>
    );

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </span>
        </li>
    );
}
