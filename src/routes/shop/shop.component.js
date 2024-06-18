import { ProductsContext } from '../../contexts/product.context';
import { useContext } from 'react';
import CategoryPreiew from '../../components/category-preview/category-preview.component';
import './shop.styles.css';

const Shop = () => {
    const {products} = useContext(ProductsContext);
   
    return(
        <div className="shop-container">
            {Object.keys(products).map((title) => {
                const productsList = products[title];
                return(
                    <CategoryPreiew key={title} title={title} products={productsList} />
                )
            })}
        </div>
    );
}

export default Shop;
