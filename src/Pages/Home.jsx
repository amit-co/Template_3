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



                            <div className="flex flex-col bg-customDarkG  items-center ">

                                   <img src={logo} className="object-contain w-[250px]" alt="Company Logo" onClick={() => navigate('/')} />
                   
                                   <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl  text-customWhite tracking-widest font-bold ">CAFE | BAR | DINING</h1>

                                    <div className="sm:flex  w-11/12 sm:max-lg:w-9/12  text-white mt-4  justify-between">

                                        <div className="text-center w-full sm:mb-0 ">
                                            <FaPhoneAlt className="text-2xl lg:text-3xl mx-auto " />
                                            <h1 className="text-lg lg:text-lg mb-4 lg:mb-0 tracking-widest">+44 (0) 208759 7755</h1>
                                        </div>
                                        <div className="text-center w-full  sm:mb-0 ">
                                            <IoLocation className="text-2xl lg:text-3xl mx-auto" />
                                            <h1 className="text-sm lg:text-lg mb-4 lg:mb-2 tracking-widest">BULGARIA BLVD 1,1421 G.K. LOZENETS, SOFIA 8277</h1>
                                        </div>
                                        <div className="text-center w-full ">
                                            <MdEmail className="lg:text-2xl text-3xl mx-auto" />
                                            <h1 className="text-sm lg:text-lg mb-4 tracking-widest"> Info@hiltongroup.com</h1>
                                        </div>
                                    </div>

                                     <div className="w-full h-[2px] bg-customGray2 "></div>

                                 
                                    <div className="flex w-full text-sm sm:text-base lg:text-lg  space-x-96 text-customWhite">
                                              <div className="flex flex-col xl:flex-col place-items-start ml-16 sm:ml-48 md:ml-20 lg:ml-44 mt-4">
                                                   <p className=" w-[220px] mt-4 sm:w-[250px] xl:w-[300px] lg:w-[350px]">SIGN TO OUR NEWSLETTER FOR </p>
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

                                                <div className="flex  place-items-end">
                                                    <img src={Wlogo} className="w-[332px]  object-contain" />
                                                </div>
                        
                                    </div>
                                           
                                 

                                <div className="flex flex-col items-center mx-auto mb-4 mt-4">
                                    <h3 className=" text-customWhite md:text-3xl sm:text-2xl text-xl lg:text-4xl tracking-widest font-medium mt-2 mb-2 ml-3">Follow Us</h3>
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
