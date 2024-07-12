import { Link } from "react-router-dom";
import img1 from "/New/Rectangle 35.png";
import img2 from "/New/Rectangle 41.png";
import img3 from "/New/Rectangle 42.png";
import img4 from "/New/Rectangle 43.png";
import img5 from "/FoodImages/Food11.jpeg";
import img6 from "/New/knife.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../utils//custom-slick-dots.css";

export function RestaurantDetails() {
   

    return (
        <div>
            <div className=" lg:h-full mx-auto items-center lg:flex  ">
               
                <div className="flex flex-col px-10 w-full md:w-9/12  mt-12 lg:mt-0 mx-auto  border-[2px]">
                    <img src={img6} className="mx-auto mb-10 mt-6" alt="Restaurant" />
                    <h1 className="hidden sm:block text-xl text-center font-medium tracking-widest text-customWhite mx-auto mb-10">
                        Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity. From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients. Whether you&apos;re craving traditional favorites or bold international flavors, our restaurants promise a gastronomic adventure that delights the senses and leaves a lasting impression.
                    </h1>
                    <button className="rounded-full  text-customWhite text-lg sm:text-xl md:text-2xl lg:text-3xl border-customWhite border-[1px] mx-auto px-3 py-2 mb-10">Find A Table</button>
                    <h1 className="mx-auto text-lg md:text-2xl sm:text-xl lg:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-customWhite tracking-widest">What's On Menu ?</h1>
                    <div className="flex  flex-col  sm:flex-row sm:space-x-4 lg:flex-row md:space-x-4 space-y-4 mt-10 mb-10 mx-auto">
                        <div className="relative group  overflow-hidden">
                        <img src={img1} className="mb-2 mt-4 w-[289px] lg:w-full md:h-full h-[252px] lg:h-full xl:h-[520px]  transition duration-300 ease-in-out transform  hover:scale-105" />
                        <div className="absolute top-0 right-0 m-4 xl:m-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h2 className="text-5xl">IN ROOM DINING</h2>
                            </div>
                            </div>
                       
                        <div className="flex flex-col space-y-4">
                            <div className="relative group  overflow-hidden ">
                            <img src={img5} className="w-[289px] h-[252px] transition duration-300 ease-in-out transform hover:scale-105" />
                            <div className="absolute top-0 right-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <h2 className="text-5xl">BAR SNACKS</h2>
                                </div>
                                </div>
                            <div className="relative group  overflow-hidden ">
                                <img src={img3} className="w-[289px] h-[252px] transition duration-300 ease-in-out transform hover:scale-105" />
                                <div className="absolute top-0 right-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-5xl">Dessert Menu</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="relative group  overflow-hidden">
                                <img src={img4} className="w-[289px] h-[252px] transition duration-300 ease-in-out transform hover:scale-105" />
                                <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-5xl">Cafe</h2>
                                </div>
                            </div>
                            <div className="relative group  overflow-hidden ">
                                <img src={img2} className="w-[289px] h-[252px] transition duration-300 ease-in-out transform hover:scale-105" />
                                <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-5xl">Beverage</h2>
                                </div>
                            </div>
                            
                            </div>
                        


                    </div>
                </div>
            </div>
        </div>
    );
}
