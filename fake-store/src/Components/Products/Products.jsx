import React, { use } from 'react';
import Product from './Product/Product';

const Products = ({ shopFetchPromise }) => {
    const products = use(shopFetchPromise)
    console.log(products);
    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-3 border-2 w-1/2 mx-auto m-4'>Find Your Products {products.length}</h1>
            <div className='grid grid-cols-3 w-9/12 mx-auto gap-10 bg-red-400'>
                {
                    products.map(product =>

                        <Product key={product.id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;