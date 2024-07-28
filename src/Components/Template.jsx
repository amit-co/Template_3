import { useState } from "react";


export default function Template({ images, Heading }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [visibleImagesCount, setVisibleImagesCount] = useState(8);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleLoadMore = () => {
        setVisibleImagesCount((prevCount) => Math.min(prevCount + 8, images.length));
    };

    return (
        <>
            <div className="bg-customDarkG bg-cover pt-8 pb-4">
                <div className="flex flex-col px-10 w-full md:w-9/12  mx-auto pt-36  border-l-[2px] border-r-[2px] ">
                                <div className="w-fit  mx-auto  ">
                                    <h1 className="text-center font-bold tracking-widest text-customWhite text-6xl mb-2 ">{Heading}</h1>
                                </div>
           
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ml-20">
                                    {images.slice(0, visibleImagesCount).map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={image}
                                                alt={`gallery ${index + 1}`}
                                                className="cursor-pointer w-8/12 h-40 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                                onClick={() => handleImageClick(index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {visibleImagesCount < images.length && (
                                    <div className="text-center mt-2">
                                        <button
                                            onClick={handleLoadMore}
                                            className="text-customWhite text-lg mt-5  mb-6 tracking-widest rounded-lg w-fit px-8 py-2 font-semibold border transition-all cursor-pointer duration-300 "
                                        >
                                            Load More
                                        </button>
                                    </div>
                                )}

                                {selectedImageIndex !== null && (
                                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                            <button
                                                className="absolute top-2 right-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition"
                                                onClick={handleCloseModal}
                                            >
                                                &times;
                                            </button>
                                            <button
                                                className="absolute top-1/2 left-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition transform -translate-y-1/2"
                                                onClick={handlePrevImage}
                                            >
                                                &#10094;
                                            </button>
                                            <img src={images[selectedImageIndex]} alt="Selected gallery" className="max-h-screen max-w-screen" />
                                            <button
                                                className="absolute top-1/2 right-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition transform -translate-y-1/2"
                                                onClick={handleNextImage}
                                            >
                                                &#10095;
                                            </button>
                                        </div>
                                    </div>
                    )}
                    </div>
            </div>
        </>
    );
}
