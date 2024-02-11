import { useState } from "react";
// All the functions in react starting with use is react hooks.
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* {[<p>Hello</p>, <p>World</p>, <p>Another one</p>]} JSX can also capable of outputting arrays of JSX elements*/}
          {/* if the value source will be changed, the code will break, suppose we removed CORE_CONCEPTS[3] */}
          {/* We can spread when key value pairs are same */}
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => {
              // return <CoreConcept key={conceptItem.title} title={conceptItem.title} description={conceptItem.description} image={conceptItem.image} />
              return <CoreConcept key={conceptItem.title} {...conceptItem} />
            })}

          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
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
        </section>
      </main>
    </div>
  );
}
() => handleSelect("components");

export default App;
