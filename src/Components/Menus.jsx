import React, { useState } from 'react';
import img1 from "/New/cafe.png";


export function Menus() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMenuOpen = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <div className="flex flex-col bg-cover h-[250px] md:h-[250px] lg:h-[250px]" style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex flex-col w-9/12 lg:w-8/12 mx-auto mt-6 sm:mt-6 md:mt-7 lg:mt-10">
                <p className="text-white text-xl sm:text-2xl tracking-widest md:text-3xl font-bold lg:text-5xl mx-auto  ">VENUE</p>
            <p className="text-white text-sm sm:text-lg md:text-3xl lg:text-4xl mt-10 tracking-widest font-bold mx-auto text-center">CAFE  | BAR  |  DINING          </p>
           </div>
        </div>
    );
}
