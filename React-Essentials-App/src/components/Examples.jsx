import { useState } from "react";

import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    return (
        <Section id="examples" title="Examples">
            <menu>
            <TabButton
                onClick={() => setSelectedTopic("components")}
                isSelected={selectedTopic === "components"}
            >
                Components
            </TabButton>
            <TabButton
                onClick={() => setSelectedTopic("jsx")}
                isSelected={selectedTopic === "jsx"}
            >
                JSX
            </TabButton>
            <TabButton
                onClick={() => setSelectedTopic("props")}
                isSelected={selectedTopic === "props"}
            >
                Props
            </TabButton>
            <TabButton
                onClick={() => setSelectedTopic("state")}
                isSelected={selectedTopic === "state"}
            >
                State
            </TabButton>
            </menu>

            {!selectedTopic ? (
            <p>Please select a topic.</p>
            ) : (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
            )}
        </Section>
    );
}
