import { useState } from "react";
import texts from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(texts.slice(0, amount));
  };
  return (
    <main className="section-center">
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          value={count}
          step="1"
          min="1"
          max="8"
          onChange={handleChange}
        />
        <button className="btn">Submit</button>
      </form>
      <article className="lorem-text">
        {text.map((info) => {
          return <h2 key={nanoid()}>{info}</h2>;
        })}
      </article>
    </main>
  );
};
export default App;
