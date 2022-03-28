export default function Cards(props) {
  return (
    <div
      className="card "
      style={{
        minHeight: "95%",
      }}
    >
      <div className="card-body">
        <div className="body-text">
          <p>{props.cardName}</p>
        </div>
      </div>
    </div>
  );
}
