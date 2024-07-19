import Discount from "../Components/Discount";
import img3 from "/New/knife.png";

export default function Gift() {
  

    return (
    
        <div className="bg-customDarkG bg-cover  pt-32">

            <div className="flex flex-col px-10 w-full md:w-9/12  mx-auto  border-l-[2px] border-r-[2px] pb-10">
                <div className="flex flex-col items-center mt-4" >
                    <img className="w-24 object-contain " src={img3} />
                    <h1 className="text-4xl tracking-widest text-white font-semibold mt-2">Gift Voucher</h1>
                </div>

                <div className="flex w-full lg:w-8/12 rounded-lg mx-auto mt-10 h-72 bg-customGray2 bg-opacity-50  ">
                </div>



                <div className="grid grid-cols-2 divide-x-2 mx-auto w-full lg:w-8/12  mt-10">
                    <div className="mr-6">
                    <p className="text-sm ml-4 sm:text-base lg:text-xl text-left  tracking-widest text-customWhite ">Give The Ultimate Gift To Someone Special With An Exciting Experience.This Voucher Is Valid 48 Hours After Purchase , For 12 Months.
                        </p>
                    </div>
                    <div className="mr-4">
                        <Discount />
                        </div>
                </div>



              


            </div>
        </div>
    );
}
