import { useState } from "react";

const CategoryBtn = ({ products, setFilteredProducts }) => {

    const allCategories = products.map(product => product.category)
    const uniqueCategory = [...new Set(allCategories)]
    const handleSortByCategory = (getCategory) => {
        const filterProducts = products.filter(product => product.category === getCategory);
        setFilteredProducts(filterProducts)
        setActiveBtn(getCategory);
    }
    const [activeBtn, setActiveBtn] = useState(null)
    return (
        <div className="">
            {
                uniqueCategory.map((category, idx) => <button
                    onClick={() => { handleSortByCategory(category) }}
                    key={idx}
                    className={`btn m-1 ${activeBtn === category ? 'bg-red-200' : 'bg-blue-200'}`}>{category}</button>)
            }
            <button onClick={() => {
                setFilteredProducts(products)
                setActiveBtn(null)
            }} className={`btn m-1 ${activeBtn === null ? 'bg-red-200' : 'bg-blue-200'}`}>ALL Products</button>
        </div>
    );
};

export default CategoryBtn;