import SingleQuestions from "./SingleQuestions";
const Questions = ({ questions, setQuestions, toggleBtn, activeID }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        const { id, title, info } = question;
        return (
          <SingleQuestions
            key={id}
            id={id}
            title={title}
            info={info}
            activeID={activeID}
            toggleBtn={toggleBtn}
          />
        );
      })}
    </section>
  );
};
export default Questions;
