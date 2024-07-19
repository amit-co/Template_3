import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";
import logo from "/9.png";
import Wlogo from "/Group 85.png";
import { useNavigate } from "react-router-dom";


export function Footer() {
    const navigate = useNavigate();
   
    return (
        <>
        <div className="flex h-[2px] bg-white"></div>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-28 bg-customDarkG ">
            
            <div className="flex ml-16 flex-col">
                <img src={logo} className="object-contain ml-10 mt-8 w-[200px]" alt="Company Logo" onClick={() => navigate('/')} />


                <div className="flex flex-col  text-customWhite">
                    <p className="mt-2">SIGN TO OUR NEWSLETTER FOR </p>
                    <p> UPDATES AND SPECIAL DEALS.</p>
                </div>
                <div className="mt-4 lg:mt-2 flex flex-row items-center">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="appearance-none bg-white text-customBlack2 w-7/12 lg:w-[30vh] xl:w-[30vh] px-3 py-2 border-[2px] "
                    />
                    <button className="border-[2px] h-11 w-20">Sign In</button>
                </div>


                <div className="flex flex-row space-x-6 items-center mb-0 lg:mb-4 mt-16 lg:mt-4">
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
            <div className="sm:flex  flex-col space-y-2 text-white mt-2 lg:mt-28 mx-auto">

                <div className="text-center w-full ">
                    <FaPhoneAlt className="text-2xl lg:text-lg mx-auto " />
                    <h1 className="text-lg lg:text-lg tracking-widest">+44 (0) 208759 7755</h1>
                </div>
                <div className="text-center w-full ">
                    <IoLocation className="text-2xl lg:text-lg mx-auto" />
                    <h1 className="text-sm lg:text-lg tracking-widest">BULGARIA BLVD 1,1421 G.K. LOZENETS, SOFIA 8277</h1>
                </div>
                <div className="text-center w-full ">
                    <MdEmail className="lg:text-2xl text-lg mx-auto" />
                    <h1 className="text-sm lg:text-lg tracking-widest"> Info@hiltongroup.com</h1>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 mb-4 lg:mt-36">
                <h1 className="text-white tracking-widest text-xl">powered by</h1>
                <img src={Wlogo} className="w-6/12 lg:w-10/12 object-contain" />
            </div>
            </div>
            </>
    );
}
