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
        <div className="flex flex-col bg-cover h-[250px] " style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex flex-col w-8/12 mx-auto mt-10">
            <p className="text-white text-4xl font-medium mx-auto ">Your Perfect Destination For Any Occassion</p>
            <p className="text-white text-2xl font-medium mx-auto text-center">Discover The Perfect Blend of Comfort  And Sophistication In Our Thoughtfully Designed Space, Where Every Detail Is Crafted To Enhance
                Your Dinning Experience. From Intimate Dinners To Lively Gatherings , OXBO Is The Ideal Setting For Any Occassion.            </p>
           </div>
        </div>
    );
}
