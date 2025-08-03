import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data-with-examples.js";

export default function Examples() {
    const [selectedButton, setSelectedButton] = useState();

    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedButton) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedButton].title}</h3>
                <p>{EXAMPLES[selectedButton].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedButton].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedButton === "components"}
                    onSelect={() => handleSelect("components")}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedButton === "jsx"}
                    onSelect={() => handleSelect("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedButton === "props"}
                    onSelect={() => handleSelect("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedButton === "state"}
                    onSelect={() => handleSelect("state")}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </section>
    );
}
