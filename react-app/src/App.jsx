import { useState } from "react";
import { myData, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import Section from "./components/MainContent/MainContent.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

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
        {/* <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {myData.map((item, index) => (
              <MainContent key={index} {...item} />
            ))}
          </ul>
        </section> */}
        <Section id="core-concepts" title="Khái niệm chính trong React" data={myData}>
        </Section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onClick={() => { handleSelect('components') }}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={() => { handleSelect('jsx') }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={() => { handleSelect('props') }}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={() => { handleSelect('state') }}>State</TabButton>
          </menu>

          {tabContent}
        </section>

        <section>
          <h2>Thông tin thêm</h2>
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input type="text" name="fullname" onChange={handleChange} value={user.fullname} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} value={user.email} />
          </div>
          <div>
            <h3>Thông tin người dùng</h3>
            <p>Họ tên: {user.fullname}</p>
            <p>Email: {user.email}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;