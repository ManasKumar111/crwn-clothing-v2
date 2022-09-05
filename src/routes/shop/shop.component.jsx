import SHOP_DATA from '../../shop-data.json'
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../Components/product-card/product-card.component'
import './shop.styles.scss'
const Shop= () =>{
    const {products} =useContext(ProductsContext)
    return (
        <div className='products-container'>
            {products.map((product) =>(
                <div>
                    <ProductCard key={product.id} product={product}/>
                </div>

            ))}
        </div>
    )
}
export default Shop;