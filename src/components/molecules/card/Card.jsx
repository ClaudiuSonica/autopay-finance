import "./Card.scss";
import data from "../../../../data";

const Card = () => {
  const { examples } = data;

  return (
    <main className="section__card">
      {examples.map((example) => (
        <div className="card" key={example.id}>
          <img className="card__img" src={example.imgURL} alt={example.title} />
          <div className="card__text">
            <h3 className="card__title">{example.title}</h3>
            <p className="card__description">{example.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
