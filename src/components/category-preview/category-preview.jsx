import Product from "../product/product";
import './category-preview.scss';
import { Link } from "react-router-dom";
import { Fragment } from "react";

const CategoryPreview = ({title, products}) => {

    return (
    
      <div className="category-container">
        

          <h2 className="title">
            <Link to={title}><span>{title.toUpperCase()}</span></Link>
          </h2>
       
        <div className="preview">
            {products
              .filter((_, index) => index < 4)
              .map((product) => <Product key={product.id} product={product} />)}
              
        </div>
      
      </div>
     
    )
     
  }
  
  export default CategoryPreview;