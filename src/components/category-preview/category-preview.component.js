import './category-preview.styles.css'
import ProductCard from '../product-card/product-card.component'
const CategoryPreiew = ({title, products}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
      {
        products.filter((_, idx) => idx < 4)
        .map((product) => <ProductCard key={product.id} product={product}/>)
      }
      </div>
    </div>
  )
}

export default CategoryPreiew;