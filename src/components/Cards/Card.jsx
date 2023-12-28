export const Card = (props) => {
  console.log(props);
  return (
    <div> {/* Ici css d'une card */}
      <img src={props.cover} alt="Cover img" />
      <p>{props.title}</p>
    </div>
  );
};
