import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { toast } from "react-toastify";
import { z } from "zod";
import img3 from "/New/knife.png";


export default function PrivateDinning() {
  
                  const schema = z.object({
                    fname: z
                      .string()
                      .min(1, "First name is required")
                          .max(50, "First name must be at most 50 characters"),
                      lname: z
                          .string()
                          .min(1, "Last name is required")
                          .max(50, "Last name must be at most 50 characters"),
                   
                  });

                  const initialFormData = {
                    date: new Date(),
                    time: "16:00",
                    people: 2,
                    fname: "",
                    lname: "",
                    occassion: "",
                    message: "",
                    tag : "PD"
                  }
                  const [formData, setFormData] = useState(initialFormData);

                  const[errors,setErrors] = useState({})
                  console.log(errors)
                  const changeHandler = (e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => ({
                      ...prev,
                      [name]: value,
                    }));
                  };

                  const handleDateChange = (date) => {
                    setFormData((prev) => ({
                      ...prev,
                      date: date,
                    }));
                  };

  function formHandler(){
                  try{
                    schema.parse(formData)
                    axios({
                    method : "post",
                    url : `${config.url}/messages`,
                    data : formData
                })
                    .then((res)=>{
                      toast.success('Message sent', {
                        position: "top-center",
                        autoClose: 1998,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        setFormData(initialFormData)
        
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
                  }catch (error) {
                        if (error instanceof z.ZodError) {
                          const errorMessages = error.errors.reduce((acc, curr) => {
                            acc[curr.path[0]] = curr.message;
                            return acc;
                          }, {});
                          setErrors(errorMessages);
                        }
                  }
    
  }

    return (
        
        <div className="bg-customDarkG bg-cover ">

            <div className="flex flex-col px-10 w-full md:w-9/12  mx-auto pt-36  border-l-[2px] border-r-[2px] pb-10">
                                  <div className="flex flex-col items-center mt-4" >
                                    <img className="w-24 object-contain " src={img3} />
                                    <h1 className="text-4xl tracking-widest text-white font-semibold mt-2">Private Dining</h1>
                                  </div>
                                <div className="flex mx-auto w-7/12 mt-4">
                                    <p className="text-sm sm:text-base lg:text-xl text-center font-medium tracking-widest text-customWhite mx-auto mb-10">Our Spaces Are Large Enough To Accomodate Gatherings And Groups With Clever Partitions Or Sliding Panels That Can Be
                                    Used To Create Smaller Areas With A Cozier Feel. Seating Arrangements Reflect And Respect Single Diners And Drinkers Too.</p>
                                </div>       

                      

                <div className="flex w-full mx-auto justify-center ">
                    <form className="md:w-8/12">
                             <div className="flex md:space-x-10 md:ml-20 flex-wrap mb-6">
                                 <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                        <label className="block text-white tracking-widest text-lg font-medium ">
                                           FIRST NAME
                                        </label>
                                  <input
                                    name="fname"
                                    onChange={changeHandler}
                                    value={formData.fname}
                                    type="text"
                                    id="fname"
                                    className="appearance-none bg-clip-text text-white px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                  />
                                  {errors.fname && <h1 className="text-red-500 text-sm">{errors.fname}</h1>}
          
                                 </div>
                            <div className="w-full md:w-5/12 md:ml-4">
                                       
                                            <label className="block text-white tracking-widest text-lg font-medium ">
                                               LAST NAME
                                            </label>

                                      
                                        <input
                                            name="lname"
                                            onChange={changeHandler}
                                            value={formData.lname}
                                            type="text"
                                            id="lname"
                                            className="appearance-none bg-clip-text text-white px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                        />
                                        {errors.lname && <h1 className="text-red-500 text-sm">{errors.lname}</h1>}

                                    </div>
                             </div>
                        <div className="flex md:space-x-10 md:ml-20 flex-wrap mb-6">
                            <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                               
                                                    <label className="block text-white tracking-widest text-lg font-medium ">
                                                        SELECT DATE
                                                    </label>

                                                
                                                  <DatePicker
                                                    name="date"
                                                    selected={formData.date}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="appearance-none bg-clip-text text-white px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                                  />
                                           </div>
                            <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                                <label className="block text-white tracking-widest text-lg font-medium ">
                                                       SELECT TIME
                                                </label>
                                            
                                              <select
                                                id="time"
                                                value={formData.time}
                                                name="time"
                                                onChange={changeHandler}
                                                className="appearance-none bg-clip-text text-white md:px-[73px] px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                              >
                                                    {[
                                                      "16:00",
                                                      "16:30",
                                                      "17:00",
                                                      "17:30",
                                                      "18:00",
                                                      "18:30",
                                                      "19:00",
                                                      "19:30",
                                                      "20:00",
                                                      "20:30",
                                                      "21:00",
                                                      "21:30",
                                                      "22:00",
                                                      "22:30",
                                                      "23:00",
                                    ].map((time) => (
                                        <option key={time} value={time} className="bg-customDarkG">
                                                               {new Date(`1970-01-01T${time}Z`).toLocaleTimeString([], {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                               })}
                                                          </option>
                                                    ))}
                                              </select>
                                        </div>
                                       
                                  </div>
                        <div className="flex md:space-x-10 md:ml-20 flex-wrap mb-6">
                            <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                            <label className="block text-white tracking-widest text-lg font-medium " >
                                                NUMBER OF GUEST
                                            </label>
                                            <select
                                                id="people"
                                                name="people"
                                                value={formData.people}
                                                onChange={changeHandler}
                                    className="appearance-none bg-clip-text text-white md:px-[73px] px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                            >
                                    {Array.from({ length: 19 }, (_, i) => i + 2).map((number) => (
                                        <option key={number} value={number} className="bg-customDarkG">
                                                        {number} People
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                            <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                          <label className="block text-white tracking-widest text-lg font-medium " >
                                            SELECT OCCASION
                                          </label>
                                          <input
                                            type="text"
                                            id="occasion"
                                            name="occassion"
                                            value={formData.occassion}
                                            onChange={changeHandler}
                                            className="appearance-none bg-clip-text text-whiite px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                          />
                                        </div>
                        
                                   </div>
                                     <div className=" pb-5 w-10/12  mt-4 ml-10 px-10">
                                        <div className="flex mt-2 flex-col">
                                          <label className="block text-white tracking-widest text-lg font-medium " >
                                            RESERVATION NOTE
                                          </label>
                                              <textarea
                                                name="message"
                                                onChange={changeHandler}
                                                value={formData.message}
                                                className="appearance-none bg-clip-text text-white px-3 py-2 border border-customWhite rounded-lg focus:outline-none"
                                                rows="5"
                                                id="message"
                                              ></textarea>
                                        </div>
                                     </div>
                                      
                                                <button onClick={formHandler} className="border rounded-lg font-medium tracking-widest md:ml-20 px-8  py-2 md:text-lg text-customWhite transition-all duration-300">
                                                  Find A Table
                                                </button>
                                     
          
                </form>
                
                </div>
            </div>
        </div>
  );
}
