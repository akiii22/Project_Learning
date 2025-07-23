const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </article>
  );
};
export default Person;
