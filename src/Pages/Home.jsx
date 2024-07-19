import { Suspense } from "react";
import { AboutRestaurant } from "../Components/AboutRestaurant";
import { Menus } from "../Components/Menus";
import { RestaurantDetails } from "../Components/RestaurantDetails";
import imgA from "/New/3bg.png";
import Gif from "/New/ad.gif";


export default function Home() {
   

    const clickHandler = () => {
        window.location.href = 'https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine';
    };

    return (
        <div className="bg-customDarkG  w-full ">
            <div className="flex flex-col items-center justify-center w-full h-full  bg-cover border-2 " style={{ backgroundImage: `url(${imgA})` }}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-customWhite tracking-widest font-bold mt-36 sm:mt-32 md:mt-44">WELCOME TO OXBO</h1>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-customWhite  tracking-widest font-bold mt-8 sm:mt-16 md:mt-24 mb-4 sm:mb-6 md:mb-10 mx-auto">CAFE  |  BAR  |  DINING</h1>
                <button onClick={clickHandler} className="rounded-full border text-customWhite text-lg sm:text-xl md:text-2xl lg:text-3xl border-customWhite border-2 mx-auto px-2 sm:px-3 py-1 sm:py-2">Find A Table</button>
                <img src={Gif} className="object-contain w-[200px] md:w-[534px] rounded-lg mt-4 mb-4"/>
            </div>

            <Suspense fallback={<h1>Loading...</h1>}>
                <RestaurantDetails />
                <Menus />
               
                <AboutRestaurant />
              
            </Suspense>
            
            
        </div>
    );
}
