const Card = (props) => {
    return (
      <>
        <div className="card">
          <h1 className="title">{props.title}</h1>
          <p className="subtitle">{props.subtitle}</p>

          <div>
            <p className="description">
              {props.description}
            </p>
          </div>
        </div>
      </>
    );
}

export default Card;

// Create a user profile card that displays user
// information like name, email and age. Use props
// and display it in the live react website.