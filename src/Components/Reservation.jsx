import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuClock } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import h1 from "/New/heathrow.png";

export function Reservation() {
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [noOfPeople, setNoOfPeople] = useState("2 people");

    const getNearestThirtyMinuteInterval = (date) => {
        const minutes = date.getMinutes();
        const roundedMinutes = Math.ceil(minutes / 30) * 30;
        if (roundedMinutes === 60) {
            date.setHours(date.getHours() + 1);
            date.setMinutes(0);
        } else {
            date.setMinutes(roundedMinutes);
        }
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.toTimeString().slice(0, 5);
    };

    const [selectedTime, setSelectedTime] = useState(getNearestThirtyMinuteInterval(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedTime(getNearestThirtyMinuteInterval(new Date()));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]);
    };

    const clickHandler = () => {
        const formData = {
            date: selectedDate,
            time: selectedTime,
            people: noOfPeople
        };
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine?${queryString}`;
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleNoOfPeople = (e) => {
        setNoOfPeople(e.target.value);
    };

    const generateTimeOptions = () => {
        const options = [];
        const start = new Date();
        start.setHours(8, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 0, 0, 0);

        while (start <= end) {
            options.push(start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            start.setMinutes(start.getMinutes() + 30);
        }

        return options;
    };

    return (
        <div className="flex  flex-row mt-10 w-full space-x-8">
            

                <div className="flex flex-col">
                                <h1 className="text-white text-3xl mb-4 tracking-widest">RESERVE A TABLE</h1>
                
                                <p className="text-white tracking-widest">To Help Us Find The Best Table For You, Select The Preffered Party Size, Date, Date, And Time Of Your Reservation.</p>
                
                          <div className="flex flex-col space-y-4 mt-4">
                                <div className="relative flex items-center border-gray-200 text-white border rounded-t h-12">
                                    <DatePicker
                                        selected={new Date(selectedDate)}
                                        onChange={handleDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={15}
                                        className="w-full pl-10 pr-4 text-lg text-white outline-none bg-transparent"
                                    />
                                    <FaRegCalendar className="absolute left-3 text-xl" />
                                </div>
                                <div className="relative flex items-center text-white border h-12">
                                    <select id="timingSelect" value={selectedTime} onChange={handleTimeChange} className="w-full pl-10 pr-4 text-lg text-black outline-none bg-transparent">
                                        {generateTimeOptions().map(time => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                    <LuClock className="absolute left-3 text-xl" />
                                </div>
                                <div className="relative flex items-center border text-white h-12">
                                    <select id="peopleSelect" value={noOfPeople} onChange={handleNoOfPeople} className="w-full pl-10 pr-4 text-lg outline-none text-black bg-transparent">
                                        {Array.from({ length: 19 }, (_, i) => i + 2).map(number => (
                                            <option key={number} value={number}>{number} People</option>
                                        ))}
                                    </select>
                                    <GoPeople className="absolute left-3 text-xl" />
                                </div>
                                <button onClick={clickHandler} className="w-full h-12 text-white text-lg font-semibold rounded border transition duration-300">
                                    Find a Table
                    </button>

                    </div>
                    

                    </div>
               

            <img src={h1} className="w-6/12" />
           
            
           
        </div>
    );
}
