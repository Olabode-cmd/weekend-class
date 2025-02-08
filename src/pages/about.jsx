import { useState } from "react";
import ProductCard from "../components/productcard";

import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';

import Text from "../components/text";
const About = () => {
    // USESTATE
    const [name, setName] = useState('Michael');
    // const [phoneNumber, setPhoneNumber] = useState('99038289298');

    const changeName = () => {
      setName("John");
    };
    console.log(name);

    // MAPPING
    const products = [
        {
            title: 'Product title 1',
            price: '200',
            image: Product1
        },
        {
            title: 'Product title 2',
            price: '300',
            image: Product2
        },
        {
            title: 'Product title 3',
            price: '400',
            image: Product3
        },
        {
            title: 'Product title 4',
            price: '500',
            image: Product4
        }
    ];

    const words = ['Faith', 'Dictionary', 'Product', 'School', 'Power'];
    
    return (
      <div>
        <h1>About</h1>
        <div className="grid">
          {/* <Text title="Product" />
          <Text title="Item" />
          <Text title="Star" />
          <Text title="Puzzle" />
          <Text title="Corn" />
          <Text title="Golden Morn" />
          <Text title="Mathematics" /> */}

          {words.map((word) => (
            <Text title={word} />
          ))}
        </div>

        <button onClick={changeName}>Change name</button>

        <div className="grid">
          {products.map((product) => (
                    <ProductCard 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))}

          {/* <ProductCard title="Product 1" price="100" image={Product1} />
          <ProductCard title="Product 2" price="200" image={Product2} />
          <ProductCard title="Product 3" price="300" image={Product3} /> */}
        </div>
      </div>
    );
}

export default About;