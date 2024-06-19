import { ProductsContext } from '../../contexts/product.context';
import { useContext, Fragment } from 'react';
import CategoryPreiew from '../../components/category-preview/category-preview.component';


const CategoriesPreview = () => {
    const {products} = useContext(ProductsContext);
   
    return(
        <Fragment>
            {Object.keys(products).map((title) => {
                const productsList = products[title];
                return(
                    <CategoryPreiew key={title} title={title} products={productsList} />
                )
            })}
        </Fragment>
    );
}

export default CategoriesPreview;
