import Header from './components/header';
// import compImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';



function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts" >
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
              <TabButton>Components</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
              
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
