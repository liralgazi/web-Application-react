import './product.css'

const Product=({product,click,isSelect=false})=>{
    return (
        <div className='product-item' onClick={click}>
            <div className="product__item__description ">Product: {product.title}</div>
            <div className="product__item__price"> Price: {product.price}</div>
            <img src={product.image} className="product__item__image" alt={"shir"}/>
            {isSelect && <div className="product__item__desc"> {product.desc}</div>}

        </div>
    );
}

export default Product;