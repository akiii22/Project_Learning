import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <section className="container">
      <h2 style={{ margin: "2rem 0" }}>
        Today there are {people.length} celebrants 🥳
      </h2>
      <List people={people} />
      <button
        type="button"
        className="btn btn-block"
        onClick={() => setPeople([])}
      >
        Reset All
      </button>
    </section>
  );
};
export default App;
