import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../firebase/fiirebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});
    console.log(categoriesMap)
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments()
            setCategoriesMap(categories)
        }
        getCategoriesMap();
    }, [])
    
    const value = {categoriesMap, setCategoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
