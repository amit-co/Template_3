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
                </div>
  );
}
