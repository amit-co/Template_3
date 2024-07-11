import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import img1 from "/icons/facebook.png";
import img2 from "/icons/instagram.png";
import img3 from "/icons/twitter.png";
import img4 from "/icons/Call.png";
import logo from "/7.png";
import img from "/Textures/4523.png";

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
        <div className={`fixed top-0 left-0 right-0 z-10 w-full transition-transform duration-300 md:opacity-75 border border-customWhite ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <div className="flex justify-between items-center bg-customDarkG text-customWhite px-4 py-2 sm:px-6 sm:py-4">
                <img
                    className="w-28 sm:w-36 md:w-44 h-auto cursor-pointer border"
                    src={logo}
                    alt="Company Logo"
                    onClick={() => navigate("/")}
                />
                <div className="hidden border px-16 py-10 md:flex md:items-center md:space-x-4 lg:space-x-8 xl:space-x-12">
                    {[
                        { to: "/", label: "HOME" },
                        { to: "/bookNow", label: "BOOK NOW" },
                        { to: "/menu", label: "MENU" },
                        { to: "/privateDinning", label: "PRIVATE DINING" },
                        { to: "/giftVoucher", label: "GIFT VOUCHER" },
                        { to: "/contact", label: "CONTACT" },
                        { to: "/about", label: "ABOUT" },
                    ].map((navItem) => (
                        <Link
                            key={navItem.to}
                            to={navItem.to}
                            className={`relative ${selectedNav === navItem.to ? 'cursor-pointer' : 'cursor-default'}`}
                            onClick={() => handleNavClick(navItem.to)}
                        >
                            <h1>{navItem.label}</h1>
                            <div className={`w-full absolute ${selectedNav === navItem.to ? 'block' : 'hidden'} h-[4px] bg-customWhite`}></div>
                        </Link>
                    ))}
                    <div
                        className={`relative ${selectedNav === '/venue' ? 'cursor-pointer' : 'cursor-default'}`}
                        onClick={() => handleNavClick('/venue')}
                        onMouseEnter={() => setDisplayVenue(true)}
                        onMouseLeave={() => setDisplayVenue(false)}
                    >
                        <h1 onClick={() => navigate("/venue")}>VENUE</h1>
                        <div className={`w-full absolute ${selectedNav === '/venue' ? 'block' : 'hidden'} h-[4px] bg-customWhite`}></div>
                        {displayVenue && (
                            <div
                                onMouseEnter={() => setDisplayVenue(true)}
                                onMouseLeave={() => setDisplayVenue(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-48 bg-white text-black shadow-lg"
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
                                        className="hover:text-customOrange transition-all duration-100"
                                        onClick={() => setToggle(false)}
                                    >
                                        {subNavItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className={`relative ${selectedNav === '/gallery' ? 'cursor-pointer' : 'cursor-default'}`}
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
                    {toggle ? <RxCross2 className="text-2xl" /> : <IoMenuOutline className="text-2xl" />}
                </button>
            </div>

            {toggle && (
                <div className="md:hidden bg-customGray text-customBrown text-center pb-8 space-x-1 text-xl z-10 absolute w-3/12 lg:w-full"
                    style={{ backgroundImage: `url(${img})` }}
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
