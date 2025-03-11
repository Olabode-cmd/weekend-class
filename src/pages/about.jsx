import { useState } from "react";
import ProductCard from "../components/productcard";

import Product1 from '../assets/images/featured-1.png';
import Product2 from '../assets/images/featured-2.png';
import Product3 from '../assets/images/featured-3.png';
import Product4 from '../assets/images/featured-4.png';

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
        description: "1 Bundle of Our Brazilian Hair Extensions",
        price: "200",
        image: Product1,
      },
      {
        description: "Full hair",
        price: "300",
        image: Product2,
      },
      {
        description: "10 Bundles of Our Hair Extensions",
        price: "400",
        image: Product3,
      },
      {
        description: "50 Bundles of Our dark Hair Extensions",
        price: "500",
        image: Product4,
      },
      {
        description: "Full hair",
        price: "300",
        image: Product2,
      },
      {
        description: "10 Bundles of Our Hair Extensions",
        price: "400",
        image: Product3,
      },
    ];

    const words = ['Mercy', 'Emmanuel', 'Femi', 'Bode'];
    
    return (
      <div>
        <h1>About</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* {words.map((word, index) => (
            <h1>{word}, in position {index}</h1>
          ))} */}

          {products.map((product) => (
            <div>
              <div>
                <img src={product.image} />
              </div>

              <div>
                <h3 className="text-gray-500 text-md mt-4 font-semibold">{product.description}</h3>
                <p className="text-md font-semibold">Starting from ${product.price}</p>
              </div>
            </div>
          ))}



          {/* {words.map((word) => (
            <h1>{word}</h1>
          ))} */}
          {/* <Text title="Product" />
          <Text title="Item" />
          <Text title="Star" />
          <Text title="Puzzle" />
          <Text title="Corn" />
          <Text title="Golden Morn" />
          <Text title="Mathematics" /> */}

          {/* {words.map((word) => (
            <Text title={word} />
          ))} */}
        </div>

        <button onClick={changeName}>Change name</button>

        

        <div className="grid">
          {/* {products.map((product) => (
                    <ProductCard 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))} */}

          {/* <ProductCard title="Product 1" price="100" image={Product1} />
          <ProductCard title="Product 2" price="200" image={Product2} />
          <ProductCard title="Product 3" price="300" image={Product3} /> */}
        </div>
      </div>
    );
}

export default About;