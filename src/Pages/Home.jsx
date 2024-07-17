import { Suspense } from "react";
import { AboutRestaurant } from "../Components/AboutRestaurant";
import { Menus } from "../Components/Menus";
import {  useNavigate } from "react-router-dom";
import { RestaurantDetails } from "../Components/RestaurantDetails";
import imgA from "/New/3bg.png";
import imgB from "/New/uns.png";

import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";
import logo from "/9.png";
import Wlogo from "/Group 85.png";
import Gif from "/New/ad.gif"
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="bg-customDarkG  w-full ">
            <div className="flex flex-col items-center justify-center w-full h-full  bg-cover border-2 " style={{ backgroundImage: `url(${imgA})` }}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-customWhite tracking-widest font-bold mt-36 sm:mt-32 md:mt-44">WELCOME TO OXBO</h1>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-customWhite  tracking-widest font-bold mt-8 sm:mt-16 md:mt-24 mb-4 sm:mb-6 md:mb-10 mx-auto">CAFE  |  BAR  |  DINING</h1>
                <button className="rounded-full border text-customWhite text-lg sm:text-xl md:text-2xl lg:text-3xl border-customWhite border-2 mx-auto px-2 sm:px-3 py-1 sm:py-2">Find A Table</button>
                <img src={Gif} className="object-contain w-[200px] md:w-[534px] rounded-lg mt-4 mb-4"/>
            </div>

            <Suspense fallback={<h1>Loading...</h1>}>
                <RestaurantDetails />
                <Menus />
               
                <AboutRestaurant />
              
            </Suspense>
            <div className="flex  bg-cover w-full h-[330px]   border " style={{ backgroundImage: `url(${imgB})` }}>
           
            </div>



            <div className="flex flex-row space-x-28 bg-customDarkG ">
                <div className="flex ml-16 flex-col">
                    <img src={logo} className="object-contain ml-10 mt-8 w-[200px]" alt="Company Logo" onClick={() => navigate('/')} />


                        <div className="flex flex-col text-customWhite">
                            <p className="mt-2">SIGN TO OUR NEWSLETTER FOR </p>
                            <p> UPDATES AND SPECIAL DEALS.</p>
                            <div className="mt-2 ">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="appearance-none bg-white text-customBlack2 w-7/12 lg:w-[30vh] xl:w-[40vh] px-3 py-2 border-[2px] "
                                />
                                <button className="border-[2px] px-3 py-2">Sign In</button>
                            </div>
                        </div>

                    <div className="flex flex-row space-x-6 items-center mb-4 mt-4">
                        <h3 className=" text-customWhite text-2xl tracking-widest font-medium mb-4 mt-4">Follow Us</h3>
                        <div className="flex space-x-4 ">
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


                <div className="sm:flex  flex-col space-y-4 text-white mt-28">

                    <div className="text-center w-full ">
                        <FaPhoneAlt className="text-2xl lg:text-lg mx-auto " />
                        <h1 className="text-lg lg:text-lg tracking-widest">+44 (0) 208759 7755</h1>
                    </div>
                    <div className="text-center w-full ">
                        <IoLocation className="text-2xl lg:text-lg mx-auto" />
                        <h1 className="text-sm lg:text-lg mb-2  tracking-widest">BULGARIA BLVD 1,1421 G.K. LOZENETS, SOFIA 8277</h1>
                    </div>
                    <div className="text-center w-full ">
                        <MdEmail className="lg:text-2xl text-lg mx-auto" />
                        <h1 className="text-sm lg:text-lg mb-4 tracking-widest"> Info@hiltongroup.com</h1>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={Wlogo} className="w-[300px] mt-10 object-contain" />
                </div>


            </div>     
                              
                
        </div>
    );
}
