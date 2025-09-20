import React, { use, useState } from 'react';
import Product from './Product/Product';
import CategoryBtn from '../CategoryBtn/CategoryBtn';

const Products = ({ shopFetchPromise }) => {
    const products = use(shopFetchPromise)
    // console.log(products);
    const [filteredProducts, setFilteredProducts] = useState(products);


    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-3 border-2 w-1/2 mx-auto m-4'>Find Your Products {filteredProducts.length}</h1>
            <div className='bg-green-400 flex justify-center items-center py-5 my-5 mx-auto'>
                <CategoryBtn products={products}
                    setFilteredProducts={setFilteredProducts}></CategoryBtn>
            </div>
            <div className='grid grid-cols-3 w-9/12 mx-auto gap-10 bg-red-400'>

                {
                    filteredProducts.map(product =>

                        <Product key={product.id} product={product}
                        ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;