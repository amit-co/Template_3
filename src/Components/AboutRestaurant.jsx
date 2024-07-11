import { RestrauntLocation } from "./RestrauntLocation";
import { Timings } from "./Timings";
import h1 from "/New/restaurant 1.png";
import logo3 from "/New/logo3.png";
import google from "/New/google.png";
import advisor from "/New/tripadvisor.png";

export function AboutRestaurant(){
    return (

        <div className="flex flex-col mx-auto">
            <div className=" flex flex-col px-8 w-full md:w-9/12   lg:mt-0 mx-auto  border-[2px]">
                <div className="flex  flex-row mt-10 w-full mx-auto space-x-8">
                    <img src={h1} className="w-5/12 " />
                    
                    <div className="flex flex-col items-center space-x-10 mt-14">
                        <h1 className="text-white text-4xl font-bold tracking-widest mb-10">Private Dinning</h1>
                        <p className="text-white text-xl text-center tracking-widest ">Your Perfect Destination For Any Occasion, Our Spaces Are Designed To Be Sociable. They Are Multi-Purpose All-Day Dinnnig And Drinking
                            Environments That Can Be Used In Different Ways,As The Ocassion Dictates Or As The Mood Changes From Breakfast To Late . Our Spaces Are Large Enough
                            To Accommodate Gatherings And Groups , With Clever Partitions Or Sliding Panels That Can Be Used To Create Smaller Areas With A Cozier Feel . Seating
                            Arrangements Reflect And Respect Single Diners And Drinkers Too.
                        </p>
                    </div>
                </div>
                <Timings />
                
                   
                
            </div>
            <div className="flex flex-col border mx-auto h-[100px] px-10 md:w-9/12">
                <h1 className="text-white text-4xl font-bold tracking-widest mt-6">What Our Dinner Say About Us</h1>
               
            </div>
            <div className="flex flex-row md:w-9/12 mx-auto h-[250px]">
                <div className="flex border  items-center">
                    <h1 className="text-white tracking-widest ml-4 mb-8 text-center">"A Fantastic Meal - Highly Recommend The Espetadas.We Also Had A Bottle Of Red And Cocktails After Dinner In The Shebeen Bar"    <img src={logo3} /></h1>
                </div>
                <div className="flex border items-center">
                    <h1 className="text-white tracking-widest ml-6 mb-10 text-center">"The Espresso Martini Is A Good Choice! Great Atmosphere And Friendly Staff As Always. Cant Wait To Go Back Again."  <img src={google} /></h1>
                </div>
                <div className="flex border items-center">
                    <h1 className="text-white tracking-widest ml-6 mb-8 text-center">"A Fantastic Meal - Highly Recommend The Espetadas.We Also Had A Bottle Of Red And Cocktails After Dinner In The Shebeen Bar" <img src={advisor} /> </h1>
                </div>
            </div>
            
        </div>
    )
}