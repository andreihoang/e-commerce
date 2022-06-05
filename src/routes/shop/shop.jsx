import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/categories-preview";
import Category from "../category/category";
import './shop.scss'

import { getCategoriesAndDocuments } from "../../firebase/fiirebase.utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesMap } from "../../store/categories/categories.action";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categories = await getCategoriesAndDocuments()
        dispatch(setCategoriesMap(categories));
    }
    getCategoriesMap();
}, [])

    return (
      <Routes>
        <Route index={true} element={<CategoriesPreview />} />
        <Route path=":category" element={<Category/>} />
      </Routes>
        
      
    );
  }
  
  export default Shop;