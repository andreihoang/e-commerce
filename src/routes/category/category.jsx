import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categoriesContext";
import Product from "../../components/product/product";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

import './category.scss'

const Category = () => {
    const {categoriesMap} = useSelector(selectCategories)
    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  
    return (
        <>
            <h2 className="title">{category.toLocaleUpperCase()}</h2>
            <div className="category-own-container">

            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
            </div>
        </>
    );
  }
  
export default Category;