const ProductCard = (props) => {
    return (
      <>
        <div className='product'>
          <div className="image-div">
            <img src={props.image} alt="product" className="image" />
          </div>
          <h3>{props.title}</h3>

          <div className="price-div">
            <p>
              From <span className="price">${props.price}</span>{" "}
            </p>
          </div>
        </div>
      </>
    );
}

export default ProductCard;