import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((coreConcept) => (
                    <CoreConcept key={coreConcept.title} {...coreConcept} />
                ))}
            </ul>
        </Section>
    );
}
