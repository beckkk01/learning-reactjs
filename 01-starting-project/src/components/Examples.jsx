import React from 'react'
import { useState } from "react";
import { EXAMPLES } from '../data'
import TabButton from '../components/TabButton'
import Section from './Section';

export default function Examples() {
      // These hooks can be called on the top level of the component not inside nested function..

  // useState will return a value which can be stored in a variable or const and it will return an array.
  // const state = useState('Please Click a button')

  // Return will always be an array and there will be exactly two elements
  // So we can also use array destructring

  const [selectedTopic, setSelectedTopic] = useState(); // set initial else it will throw and error

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
    <h2>{Examples}</h2>
    <menu>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => handleSelect("state")}
      >
        State
      </TabButton>
    </menu>

    {!selectedTopic ? (
      <p>Please Select A Topic</p>
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
  )
}
