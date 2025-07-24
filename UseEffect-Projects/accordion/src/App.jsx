import { useState } from "react";
import { questions as data } from "./data";
import Questions from "./Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveId] = useState(null);

  const toggleBtn = (id) => {
    let newActiveId = id === activeID ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeID={activeID}
        toggleBtn={toggleBtn}
      />
    </main>
  );
};
export default App;
