import CoreConcept from '../components/CoreConcept'

import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){

    return (
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
            return <CoreConcept key={conceptItem.title} {...conceptItem} />;
          })}
        </ul>
      </section>
    )
}