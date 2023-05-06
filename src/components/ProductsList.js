import Product from "./Product";
import ProductsData from "./ProductsData";
import "./ProductsList.css";
import Header from "./HeaderBoxs";
import { useState } from "react";
function ProductsList() {
  let [price, setPrice] = useState(1000);

  let products = ProductsData.map((product) => {
    // دا زي الشرط المختصر بتاع الجافا ولكن هنا كتابه مختلفه بس مفهومه واحد يعني هيرجع مل العناصر
    // الي هتتحقق الشرط وبس مفيش حل بديل ولو مفيش مش هتعرض حاجه
    return (
      <Product product={product} key={product.id} />
    );
  });

  function search(ele) {
    products = ProductsData.map((product) => {
      return (
        (product.category).startsWith(ele) ? <Product product={product} key={product.id} /> : null
        );
      });
      Setproducts(products);
  }
  let [product, Setproducts] = useState(products);
  return (
    <div className="product-list">
      <div className="row-one">
        <h2>Filter By</h2>
        <div className="boxs">
          <Header title ="category"/>
          <section>
            <label htmlFor="all">
            <input type="radio" name="category" id="all" onClick={(e) =>{
              Setproducts(products);
            }}/>
            All
            </label>
            <label htmlFor="men">
            <input type="radio" name="category" id="men" onClick={(e) =>{
              search(e.target.id)
            }}/>
            Men's clothing
            </label>
            <label htmlFor="jew"> 
            <input type="radio" name="category" id="jew" onClick={(e) =>{
              search(e.target.id)
            }}/>
            jewelery
            </label>
            <label htmlFor="elec"> 
            <input type="radio" name="category" id="elec" onClick={(e) =>{
              search(e.target.id)
            }}/>
            electronics
            </label>
            <label htmlFor="women"> 
            <input type="radio" name="category" id="women" onClick={(e) =>{
              search(e.target.id)
            }}/>
            women's clothing
            </label>
          </section>
        </div>
        <div className="boxs">
          <Header title ="search"/>
          <section>
            <input type="text" placeholder="Enter name product" onKeyUp={(e) => {
              products = ProductsData.map((product) => {
              return (
                  (product.title.toLowerCase()).startsWith(e.target.value) ? <Product product={product} key={product.id} /> : null
                );
              });
              Setproducts(products)
            }}/>
          </section>
        </div>
        <div className="boxs">
          <Header title ="price"/>
          <section>
            <label>
            <input type="range" max={1000} min={0} defaultValue={1000} onInput={(e)=> {
              setPrice(e.target.value);
              products = ProductsData.map((product) => {
                return (
                  e.target.value >= product.price? <Product product={product} key={product.id} /> : null
                  );
                })
                if(e.target.value < 2) {
                  Setproducts(<h1>sorry not found products equal this price</h1>);
                }else {
                  Setproducts(products);
                }
            }}/>
            <span id='mony'>{price}$</span>
            </label>
          </section>
        </div>
      </div>
      <div className="row-tow">{product}</div>
    </div>
  );
}
export default ProductsList;
