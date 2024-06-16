import { createContext,useEffect,useState     } from 'react';
import { getCategoriesAndDocuments  } from '../utils/firebase/firebase.util.js';


export const ProductsContext = createContext({
    products: [],
  });

export const ProductsProvider = ({children}) => {

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
    }
    getCategoriesMap();
  }, []);


    const [products, setProducts] = useState([]);

    const value =  {products}; 
    return<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
