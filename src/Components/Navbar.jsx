import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "/7.png";
import img from "/Textures/4523.png";
import img1 from "/New/callcenter.png";

export function Navbar() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);

    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 border` }>
            <div className={`bg-repeat bg-customDarkG text-white  flex  transition-opacity duration-300`} >
                
                    <img
                        className="border-r py-8 px-2 z-3 cusrsor-pointer sm:w-[130px] w-[150px] "
                        src={logo}
                        alt="Company Logo"
                        onClick={() => navigate("/")}
                />
                
                <div className="text-white absolute top-10 right-6">
                        {toggle ? (
                            <RxCross2
                                onClick={() => setToggle(false)}
                                className="md:hidden cursor-pointer text-4xl"
                            />
                        ) : (
                            <IoMenuOutline
                                onClick={() => setToggle(true)}
                                className="md:hidden cursor-pointer text-3xl "
                            />
                        )}
                    </div>
                
                <div className="hidden xl:grid xl:grid-cols-2 md:flex md:space-x-2 lg:space-x-4 2xl:space-x-28">
                    <h1 className="tracking-widest text-3xl mt-8 ml-4 w-[850px]">R/S Name</h1>

                    <div className="flex flex-row mr-20 space-x-2">
                        <div className="border-l px-10 hidden sm:block">
                            <button onClick={() => navigate("/bookNow")} className="text-3xl mt-10">Reservation</button>
                        </div>
                        <div className="border-l border-r px-10 hidden sm:block">
                            <button onClick={() => navigate("/gallery")} className="text-3xl mt-10">Gallery</button>
                        </div>
                        <div className="absolute right-1 text-3xl px-6 mt-8 hidden sm:flex ">
                            <img src={img1} className="w-[50px] mr-8" onClick={() => navigate("/contact")} />
                        </div>
                    </div>
                </div>


              
            </div>
            

            <div className={` bg-customDarkG w-full transition-all duration-500 ease-in-out text-customWhite text-center pb-8 space-x-1 text-xl bg-customDarkG z-10 ${toggle ? "translate-y-0" : "translate-y-[-100vh]"}  absolute`}
                
            >
                <Link to="/" className="cursor-pointer ">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        HOME
                    </h1>
                </Link>
                <Link to="/bookNow" className="w-fit mx-auto relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        BOOK NOW
                    </h1>
                </Link>

                <Link to="/menu" className="w-fit mx-auto cursor-pointer relative">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        MENU
                    </h1>
                </Link>
                <Link
                    to="/venue"
                    onMouseEnter={() => setDisplayVenue(true)}
                    onMouseLeave={() => setDisplayVenue(false)}
                    className="cursor-pointer"
                >
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        VENUE
                    </h1>
                    {displayVenue && (
                        <div
                            onMouseEnter={() => setDisplayVenue(true)}
                            onMouseLeave={() => setDisplayVenue(false)}
                            className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <Link onClick={() => setToggle(false)}
                                to="/venue/restaurant"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                RESTAURANT
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/bar"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                BAR
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/cafe"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                CAFE
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/ird"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                IRD
                            </Link>
                            <RxCross2 onClick={() => setDisplayVenue(false)} className="absolute text-3xl top-[-7px] right-3" />

                        </div>
                    )}
                </Link>
                <Link to="/privateDinning" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        PRIVATE DINNING
                    </h1>
                </Link>
                <Link to="/giftVoucher" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        GIFT VOUCHER
                    </h1>
                </Link>
                <Link to="/contact" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        CONTACT
                    </h1>
                </Link>
                <Link to="/gallery" onMouseEnter={() => setDisplayGallery(true)} onMouseLeave={() => setDisplayGallery(false)} className="relative cursor-pointer">
                    <h1
                        className={` hover:text-customPink`}
                        onClick={() => setToggle(false)}
                    >
                        GALLERY
                    </h1>
                    {displayGallery && (
                        <div className="relative">
                            <div
                                onMouseEnter={() => setDisplayGallery(true)}
                                onMouseLeave={() => setDisplayGallery(false)}
                                className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/food"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    FOOD
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/drinks"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    DRINKS
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/teams"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    TEAM
                                </Link>
                                <RxCross2 onClick={() => setDisplayGallery(false)} className="absolute text-3xl top-[-7px] right-3" />

                            </div>
                        </div>

                    )}
                </Link>
                <Link to="/about" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        ABOUT
                    </h1>
                </Link>
            </div>

        </div>
    );
}
