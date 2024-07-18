import React, { useState } from 'react';


const menuArray = [
    { small: "/New/Rectangle 35.png", large: "/Pdf/IRD-Menu.jpg", title: "In Room Dining" },
    { small: "/FoodImages/Food10.jpeg", large: "/Pdf/CafeMenu.jpg", title: "Cafe Menu" },
    { small: "/drinksImages/Drinks6.jpeg", large: "/FoodImages/BarSnacks.jpg", title: "Bar Menu" },
    { small: "/FoodImages/Food11.jpeg", large: "/Pdf/CafeKitchen.jpg", title: "Cafe Kitchen" },
    
    
];

export default function Menu({ page }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoom, setZoom] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMenuOpen = (image) => {
        setSelectedImage(image);
        setZoom(false);
    };

    const handleMouseEnter = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-customDarkG pt-28 " >
            <div
                className={`flex flex-col sm:flex py-16 bg-cover ${page === "Menu" ? "opacity-100" : "opacity-100"} `}
            >
                <h1 className="text-6xl text-white mx-auto">What's On Menu?</h1>

                <div className="w-full mt-20">
                    <div className="flex flex-wrap  justify-center gap-5 mb-12">
                        {menuArray.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col cursor-pointer  w-64 md:w-80 lg:w-[400px] p-4"
                                onClick={() => handleMenuOpen(item.large)}
                            >
                                <h2 className="text-3xl text-white px-14 mb-2">{item.title}</h2>
                                <img src={item.small} alt={`Menu item ${index + 1}`} className="w-10/12 h-80 rounded-lg" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-5">
                        {menuArray.slice(2, 4).map((item, index) => (
                            <div
                                key={index + 2}
                                className="flex flex-col cursor-pointer w-64 md:w-80 lg:w-[400px] p-4"
                                onClick={() => handleMenuOpen(item.large)}
                            >
                                <h2 className="text-3xl text-white px-16 mb-2">{item.title}</h2>
                                <img src={item.small} alt={`Menu item ${index + 3}`} className="w-10/12 h-80 rounded-lg"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative">
                        <button
                            className="absolute z-10 top-0 right-1 text-black text-3xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <div
                            className="w-full h-screen overflow-hidden relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                        >
                            <img
                                src={selectedImage}
                                className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? 'transform scale-150' : ''
                                    }`}
                                style={{
                                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                                }}
                                alt="Menu Item"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
