import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";

// useRef
// useContext

// API Endpoint

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();

            setProducts(data.products)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    console.log(products)

    useEffect(() => {
        fetchProducts();
    }, []); 

    if (loading) {
        return <p>Products are Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            <div className="grid grid-cols-3">
                {products.map((product) => (
                    <ProductCard 
                        title={product.title} 
                        price={product.price} 
                        image={product.thumbnail} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Products;