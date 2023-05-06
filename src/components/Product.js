import './product.css'
function Product(props) {
  return(
    <div className='card'>
    <img src={props.product.image} alt=""/>
    <h3>{props.product.title}</h3>
    <p>{props.product.description}</p>
    <p>price: {props.product.price}</p>
  </div>
  )
}

export default Product;