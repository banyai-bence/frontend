import Header from './components/header';
// import compImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';



function App() {
  const [dynamicContent, setDynamicContent] = useState(undefined);

  function handleSelect(selectedTopic) {
    console.log(`You clicked the ${selectedTopic} button.`)
    //dynamiContent = selectedTopic;
    setDynamicContent(selectedTopic.toLowerCase());
  }

  let tabContent = <p>Please select a topic</p>;
  if (dynamicContent) {
    tabContent = (
      <>
        <h3>{EXAMPLES[dynamicContent].title}</h3>
        <p>{EXAMPLES[dynamicContent].description}</p>
        <pre>
          <code>{EXAMPLES[dynamicContent].code}</code>
        </pre>
      </>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts" >
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("Components")}
              isSelected={dynamicContent === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("JSX")}
              isSelected={dynamicContent === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("Props")}
              isSelected={dynamicContent === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("State")}
              isSelected={dynamicContent === "state"}
            >
              State
            </TabButton>

          </menu>
          {/*Dynamic Content: {dynamiContent}*/}
          <div id='tab-content'> {tabContent} </div>
        </section>
      </main>
    </div>
  );
}

export default App;
