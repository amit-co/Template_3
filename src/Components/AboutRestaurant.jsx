import { useNavigate } from "react-router-dom";
import { Timings } from "./Timings";
import h1 from "/New/restaurant 1.png";
import logo3 from "/New/logo3.png";
import google from "/New/google.png";
import advisor from "/New/tripadvisor.png";

export function AboutRestaurant() {
    const navigate = useNavigate();
    return (

        <div className="flex flex-col mx-auto ">
            <div className=" flex flex-col px-8 w-full md:w-9/12   lg:mt-0 mx-auto  border-[2px]">
                <div className="flex flex-col lg:flex-row mt-10 w-full mx-auto space-x-4">
                    <img src={h1} className="w-full lg:w-5/12 ml-0 lg:ml-9 " />
                    
                    <div className="flex flex-col items-center space-x-0 lg:space-x-10 mt-6 sm:mt-8 md:mt-10 lg:mt-14">
                        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest mb-10">Private Dining</h1>
                        <p className="text-white text-sm sm:text-base lg:text-xl text-center tracking-normal lg:tracking-widest mb-5 ">Your Perfect Destination For Any Occasion, Our Spaces Are Designed To Be Sociable. They Are Multi-Purpose All-Day Dinnnig And Drinking
                            Environments That Can Be Used In Different Ways,As The Ocassion Dictates Or As The Mood Changes From Breakfast To Late. Our Spaces Are Large Enough
                            To Accommodate Gatherings And Groups, With Clever Partitions Or Sliding Panels That Can Be Used To Create Smaller Areas With A Cozier Feel . Seating
                            Arrangements Reflect And Respect Single Diners And Drinkers Too.
                        </p>
                        <button onClick={() => navigate("/privateDinning")} className="rounded-full  text-customWhite text-sm sm:text-sm md:text-lg lg:text-xl tracking-widest border-customWhite border-[1px] mx-auto px-5 py-3 ">Make a Request</button>
                    </div>
                </div>
                <Timings />
                
                   
                
            </div>
            <div className="flex flex-col border mx-auto  h-[100px] px-10 md:w-9/12">
                <h1 className="text-white text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest mt-6">What Our Dinner Say About Us</h1>
               
            </div>
            <div className="flex flex-col lg:flex-row md:w-9/12 mb-36 lg:mb-0 mx-auto h-[250px]">
                <div className="flex border  items-center">
                    <h1 className="text-white text-xs sm:text-sm md:text-base lg:text-base tracking-widest ml-3 mr-2 mt-2 lg:mt-0 lg:ml-3 mb-8 lg:mb-5 text-center ">"A Fantastic Meal - Highly Recommend The Espetadas.We Also Had A Bottle Of Red And Cocktails After Dinner In The Shebeen Bar"    <img src={logo3} /></h1>
                </div>
                <div className="flex border items-center">
                    <h1 className="text-white tracking-widest text-xs sm:text-sm md:text-base lg:text-base ml-3 mr-2 mt-2 lg:mt-4 lg:ml-3 mb-8 lg:mb-8 text-center">"The Espresso Martini Is A Good Choice! Great Atmosphere And Friendly Staff As Always. Cant Wait To Go Back Again."  <img src={google} className="justify-center" /></h1>
                </div>
                <div className="flex border items-center">
                    <h1 className="text-white tracking-widest text-xs sm:text-sm md:text-base lg:text-base ml-3 mr-2 mt-3 lg:mt-2 lg:ml-3 mb-3 lg:mb-5 text-center">"A Fantastic Meal - Highly Recommend The Espetadas.We Also Had A Bottle Of Red And Cocktails After Dinner In The Shebeen Bar" <img src={advisor} /> </h1>
                </div>
            </div>
            
        </div>
    )
}