import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import { myData, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = (<p>Vui lòng chọn một chủ đề để xem ví dụ.</p>);
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => { handleSelect('components') }}>Components</TabButton>
            <TabButton onSelect={() => { handleSelect('jsx') }}>JSX</TabButton>
            <TabButton onSelect={() => { handleSelect('props') }}>Props</TabButton>
            <TabButton onSelect={() => { handleSelect('state') }}>State</TabButton>
          </menu>

          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;