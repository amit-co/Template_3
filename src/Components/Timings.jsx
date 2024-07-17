import { useState } from "react";
import { Reservation } from "./Reservation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import img from "/Textures/4455.jpg";
export function Timings() {
   
    return (
                <div className="justify space-y-1">
                            
                      <div className=" xl:ml-16 py-6 xl:px-[85px] 2xl:px-[95px] rounded-lg">
                          
                       
                                <div className="mt-5 bg-clip-text rounded-lg mb-8 mediumLarge2:mx-0 w-fit mx-auto">
                                       <Reservation />
                                </div>
            </div>
            <div className="text-center">
                <button className="text-customWhite text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest border-customWhite border-[1px] mx-auto px-8 py-3 mb-8">Gift Voucher</button>
                <h1 className="mx-auto text-sm md:text-base lg:text-lg text-customWhite ml-2 lg:ml-52 mr-2 lg:mr-52 tracking-widest mb-6 lg:mb-10">Give the ultimate gift to someone special with Exciting experience.
                    This voucher is valid 48 hours after purchase, for 12 months.</h1>
            </div>
                </div>
  );
}
