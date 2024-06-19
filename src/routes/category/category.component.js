import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';



import { ProductsContext } from '../../contexts/product.context';

import './category.styles.css';

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [productsCategory, setProductsCategory] = useState(products[category]);
  console.log(products)

  useEffect(() => {
    setProductsCategory(products[category]);
  }, [category, products]);

  return (
    <Fragment> 
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {productsCategory &&
          productsCategory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;