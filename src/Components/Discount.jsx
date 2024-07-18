import { useState } from "react";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";


export default function Discount() {
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState("");

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    return (
        <div className="md:flex ">

            <div className=" w-full mx-10  md:w-full ">
                <h1 className="text-customWhite text-2xl font-bold">From</h1>
                <h1 className="font-normal mt-1 text-customWhite text-xl">£10.00</h1>
                <div className="flex flex-col mt-3">
                    <label className="text-customWhite text-xl">Enter Your Amount</label>
                    <input
                        type="text"
                        id="input"
                        className="sm:w-7/12 sm:max-md:w-9/12 rounded-lg bg-customGray2 md:w-10/12  py-2 pl-3 "
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>

                
                    <div className="flex mt-4">
                        <button
                            className="text-white text-3xl "
                            onClick={() => {
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                            }}
                        >
                            <FaSquareMinus  />
                        </button>
                        <input
                            type="number"
                            className={`outline-none rounded-lg ${quantity < 10 ? "pl-6 md:max-lg:pl-5" : "sm:pl-7 md:max-lg:pl-5"
                                } sm:text-lg w-16`}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            className="text-3xl justify-center text-customWhite "
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            <FaSquarePlus />
                        </button>
                    </div>
                
                <button className=" border text-white mt-4  tracking-widest h-10 w-32 rounded-lg">
                    Add to basket
                </button>
            </div>
        </div>
    )
}