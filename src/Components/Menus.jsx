import React, { useState } from 'react';
import img1 from "/New/unsplash.png";


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
            <div className="flex flex-col w-9/12 lg:w-8/12 mx-auto  mt-6 sm:mt-6 md:mt-7 lg:mt-10">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl  mx-auto font-medium  ">Your Perfect Destination For </p>
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-medium mx-auto ">Any Occassion</p>
            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl mt-2 font-medium mx-auto text-center">Discover The Perfect Blend of Comfort  And Sophistication In Our Thoughtfully Designed Space, Where Every Detail Is Crafted To Enhance
                Your Dinning Experience. From Intimate Dinners To Lively Gatherings , OXBO Is The Ideal Setting For Any Occassion.            </p>
           </div>
        </div>
    );
}
