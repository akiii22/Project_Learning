import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestions = ({ id, title, info, toggleBtn, activeID }) => {
  const isActive = id === activeID;
  return (
    <article className="article">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleBtn(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestions;
