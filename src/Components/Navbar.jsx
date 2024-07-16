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
        <div className={`fixed top-0 left-0 right-0 w-full  transition-transform duration-300 md:opacity-75 border border-customWhite ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <div className="flex items-center bg-customDarkG text-customWhite   h-[120px] ">
                <img
                    className="w-40 h-[120px] cursor-pointer border"
                    src={logo}
                    alt="Company Logo"
                    onClick={() => navigate("/")}
                />
                <h1 className="tracking-widest text-3xl ml-10 w-[850px]">OXBO</h1>

                <div className="border text-xl md:flex items-center md:space-x-4 lg:space-x-8 xl:space-x-12">
                    {[
                        
                        { to: "/reservation", label: "RESERVATION" },
                    
                       
                    ].map((navItem) => (
                        <Link
                            key={navItem.to}
                            to={navItem.to}
                            className={`relative ml-8 ${selectedNav === navItem.to ? 'cursor-pointer' : 'cursor-default'}`}
                            onClick={() => handleNavClick(navItem.to)}
                        >
                            <h1>{navItem.label}</h1>
                            <div className={`w-full absolute ${selectedNav === navItem.to ? 'block' : 'hidden'} h-[4px] bg-customWhite`}></div>
                        </Link>
                    ))}
                    
                    <div
                        className={`relative py-11 px-14 border ${selectedNav === '/gallery' ? 'cursor-pointer' : 'cursor-default'}`}
                        onClick={() => handleNavClick('/gallery')}
                        onMouseEnter={() => setDisplayGallery(true)}
                        onMouseLeave={() => setDisplayGallery(false)}
                    >
                        <h1 onClick={() => navigate("/gallery")}>GALLERY</h1>
                        <div className={`w-full absolute ${selectedNav === '/gallery' ? 'block' : 'hidden'} h-[4px] bg-customWhite`}></div>
                        {displayGallery && (
                            <div
                                onMouseEnter={() => setDisplayGallery(true)}
                                onMouseLeave={() => setDisplayGallery(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-48 bg-white text-black shadow-lg"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                {[
                                    { to: "/gallery/food", label: "FOOD" },
                                    { to: "/gallery/drinks", label: "DRINKS" },
                                    { to: "/gallery/teams", label: "TEAMS" },
                                ].map((subNavItem) => (
                                    <Link
                                        key={subNavItem.to}
                                        to={subNavItem.to}
                                        className="hover:text-customOrange transition-all duration-100"
                                        onClick={() => setToggle(false)}
                                    >
                                        {subNavItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
                <button className="md:hidden" onClick={() => setToggle(!toggle)}>
                    {toggle ? <RxCross2 className="text-2xl ml-28 " /> : <IoMenuOutline className="text-2xl ml-28" />}
                </button>

                <img className="ml-14 mr-12" src={img1} alt="Call Center" />

            </div>

            {toggle && (
                <div className="md:hidden bg-customDarkG text-customWhite text-center pb-8 space-x-1 space-y-5 text-xl z-10 absolute w-full sm:w-3/12  border lg:w-full"
                    
                >
                    {[
                        { to: "/", label: "HOME" },
                        { to: "/bookNow", label: "BOOK NOW" },
                        { to: "/menu", label: "MENU" },
                        { to: "/venue", label: "VENUE" },
                        { to: "/privateDinning", label: "PRIVATE DINING" },
                        { to: "/giftVoucher", label: "GIFT VOUCHER" },
                        { to: "/contact", label: "CONTACT" },
                        { to: "/gallery", label: "GALLERY" },
                        { to: "/about", label: "ABOUT" },
                    ].map((navItem) => (
                        <Link
                            key={navItem.to}
                            to={navItem.to}
                            className="block"
                            onClick={() => setToggle(false)}
                        >
                            <h1 className="hover:text-customPink">{navItem.label}</h1>
                        </Link>
                    ))}
                    {displayVenue && (
                        <div className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {[
                                { to: "/venue/restaurant", label: "RESTAURANT" },
                                { to: "/venue/bar", label: "BAR" },
                                { to: "/venue/cafe", label: "CAFE" },
                                { to: "/venue/ird", label: "IRD" },
                            ].map((subNavItem) => (
                                <Link
                                    key={subNavItem.to}
                                    to={subNavItem.to}
                                    className="hover:text-customPink transition-all duration-100"
                                    onClick={() => setToggle(false)}
                                >
                                    {subNavItem.label}
                                </Link>
                            ))}
                            <RxCross2 onClick={() => setDisplayVenue(false)} className="absolute text-3xl top-[-7px] right-3" />
                        </div>
                    )}
                    {displayGallery && (
                        <div className="relative">
                            <div className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                {[
                                    { to: "/gallery/food", label: "FOOD" },
                                    { to: "/gallery/drinks", label: "DRINKS" },
                                    { to: "/gallery/teams", label: "TEAMS" },
                                ].map((subNavItem) => (
                                    <Link
                                        key={subNavItem.to}
                                        to={subNavItem.to}
                                        className="hover:text-customPink transition-all duration-100"
                                        onClick={() => setToggle(false)}
                                    >
                                        {subNavItem.label}
                                    </Link>
                                ))}
                                <RxCross2 onClick={() => setDisplayGallery(false)} className="absolute text-3xl top-[-7px] right-3" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
