import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";

// useRef
// useContext


const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            setProducts(data.products);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []); // dependency array

    if (loading) {
        return <p>Products Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            <div className="grid">
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