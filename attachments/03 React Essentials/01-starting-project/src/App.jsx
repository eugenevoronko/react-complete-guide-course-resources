import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples.js";

function App() {
    const [selectedButton, setSelectedButton] = useState("components");

    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
        console.log(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            image={CORE_CONCEPTS[0].image}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedButton].title}</h3>
                        <p>{EXAMPLES[selectedButton].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedButton].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
