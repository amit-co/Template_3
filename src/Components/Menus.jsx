import React, { useState } from 'react';
import img1 from "/New/cafe.png";
import { useNavigate } from "react-router-dom";


export function Menus() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMenuOpen = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <div className="flex flex-col bg-cover h-full md:h-[250px] lg:h-[250px] " style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex flex-col w-9/12 lg:w-8/12 mx-auto mt-6 sm:mt-6 md:mt-7 lg:mt-10">
                <p className="text-white text-xl sm:text-2xl tracking-widest md:text-3xl font-bold lg:text-5xl mx-auto  ">VENUE</p>
                <div className="grid grid-cols-3 divide-x-4  text-center font-bold  text-white ">
                    <h1 onClick={() => navigate("/venue/cafe")} className=" text-sm sm:text-lg md:text-3xl lg:text-4xl mt-2 mb-4 md:mt-10 tracking-widest">CAFE</h1>
                    <h1 onClick={() => navigate("/venue/bar")} className=" text-sm sm:text-lg md:text-3xl lg:text-4xl mt-2 mb-4 md:mt-10 tracking-widest">BAR</h1>
                    <h1 onClick={() => navigate("/venue/ird")} className=" text-sm sm:text-lg md:text-3xl lg:text-4xl mt-2 mb-4 md:mt-10 tracking-widest ml-4 ">DINING</h1>
                    </div>
           </div>
        </div>
    );
}
