import { Suspense } from "react";
import { AboutRestaurant } from "../Components/AboutRestaurant";
import { Menus } from "../Components/Menus";

import { RestaurantDetails } from "../Components/RestaurantDetails";
import imgA from "/New/3bg.png";
import imgB from "/New/uns.png";

import img1 from "/icons/facebook.png";
import img2 from "/icons/instagram.png";
import img3 from "/icons/twitter.png";
import logo from "/7.png";
import Wlogo from "/Group 85.png";

import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
    return (
        <div className="bg-customDarkG w-screen ">
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover border-2 mx-auto" style={{ backgroundImage: `url(${imgA})` }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-customWhite tracking-widest font-bold mt-16 sm:mt-24 md:mt-32">WELCOME TO OXBO</h1>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-customBlack2 tracking-widest font-bold mt-8 sm:mt-16 md:mt-24 mb-4 sm:mb-6 md:mb-10 mx-auto">CAFE | BAR | DINING</h1>
                <button className="rounded-full border text-customBlack2 text-lg sm:text-xl md:text-2xl lg:text-3xl border-customWhite border-2 mx-auto px-2 sm:px-3 py-1 sm:py-2">Find A Table</button>
            </div>

            <Suspense fallback={<h1>Loading...</h1>}>
                <RestaurantDetails />
                <Menus />
               
                <AboutRestaurant />
              
            </Suspense>
            <div className="flex  bg-cover w-full h-[350px] " style={{ backgroundImage: `url(${imgB})` }}>
           
            </div>



            <div className="flex flex-col bg-customDarkG items-center ">
                                
                                   
                                

                <div className="flex flex-col ">
                                    <img src={logo} className="w-[400px] mx-auto" alt="Company Logo" onClick={() => navigate('/')} />
                                   <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-4xl text-customWhite tracking-widest font-bold mx-auto">CAFE | BAR | DINING</h1>

                    <div className="sm:flex sm:mt-20 w-11/12 sm:max-lg:w-9/12 mx-auto text-white space-x-14 mb-4 justify-between">

                        <div className="text-center w-full sm:mb-0 ">
                            <FaPhoneAlt className="text-3xl mx-auto mt-1" />
                            <h1 className="text-lg tracking-widest">+44 (0) 208759 7755</h1>
                        </div>
                        <div className="text-center w-full  sm:mb-0 space-y-1 ">
                            <IoLocation className="text-3xl mx-auto" />
                            <h1 className="text-lg tracking-widest">BULGARIA BLVD 1,1421 G.K. LOZENETS, SOFIA 8277</h1>
                        </div>
                        <div className="text-center w-full space-y-1">
                            <MdEmail className="text-3xl mx-auto" />
                            <h1 className="text-lg tracking-widest"> Info@hiltongroup.com</h1>
                        </div>
                    </div>

                              </div>


                <div className="w-full h-[2px] bg-customGray2 mb-10"></div>

                <div className="flex flex-row space-x-72 mx-auto mb-10">
                    <div className="flex flex-col text-customWhite">
                        <p>SIGN TO OUR NEWSLETTER FOR UPDATES AND SPECIAL DEALS.</p>
                        <div className="">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="appearance-none bg-customGray2 text-customBlack2 w-[60vh]  px-3 py-2 border-[2px] "
                            />
                        </div>
                        <button className="border-[2px] px-3 py-2">Sign In</button>
                    </div>
                    <img src={Wlogo} className="" />
                </div>

                <div className="flex flex-col items-center mx-auto mb-10">
                    <h3 className=" text-customWhite text-4xl tracking-widest font-medium mb-2 ml-3">Follow Us</h3>
                    <div className="flex space-x-4 b">
                        <a href="https://www.facebook.com/yourprofile">
                            <img src={img1} />
                        </a>
                        <a href="https://www.instagram.com/yourprofile">
                            <img src={img2} />
                        </a>
                        <a href="https://twitter.com/yourprofile">
                            <img src={img3} />
                        </a>
                    </div>
                </div>

                </div>
                
        </div>
    );
}
