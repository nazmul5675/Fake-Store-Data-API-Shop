import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Product = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    console.log(product);
    const { category, description, image, price, title, rating } = product;
    return (
        <div className="p-10">
            <div className="card bg-base-100 w-96 shadow-sm p-5 h-[600px]">
                <figure>
                    <img className="h-[250px] object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h3 className="text-base font-bold">{title}</h3>

                    <button className="btn flex justify-between font-bold" onClick={() => setIsModalOpen(true)}>See Product Details <IoIosArrowDropdownCircle /></button>
                    {isModalOpen && (
                        <dialog open className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{title}</h3>
                                <p className="py-4">{description}</p>
                                <div className="modal-action">
                                    {/* ✅ Changed from form/method=dialog to state close */}
                                    <button
                                        className="btn"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </dialog>
                    )}
                    <div className="mt-5">
                        <div>
                            <h1 className="text-l font-bold">Rate by {rating.count} Customer</h1>
                            <div className="flex justify-between my-3">
                                <button className="btn border-none">{rating.rate} <CiStar /></button>
                                <button className="btn border-none">{category}</button>

                            </div>
                        </div>
                        <div className="card-actions flex justify-between items-center ">
                            <button className="btn btn-primary">{price} $</button>

                            <button className="btn btn-primary">Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;