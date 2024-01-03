export const Card = (props) => {
  console.log(props);
  return (
    <div className="card_logement"> {/* Ici css d'une card */}
      <img src={props.cover} alt="Cover img" />
      <div className="card_logement_title">{props.title}</div>
    </div>
  );
};
