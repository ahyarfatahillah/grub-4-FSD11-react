import React from 'react'

const Navbar = () => {
  return (
    <>
       <header className="w-screen">
        <div className="h-20 w-screen py-[10px] flex justify-between ps-8 pe-16 border-b-[1px] items-center fixed top-0 bg-white max-sm:pe-2 ">
            <a href="../index.html"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                className=" object-cover w-28 max-sm:w-16" /> </a>
            <div className="pl-[200px] px-8 max-sm:hidden ">
                <div
                    className="flex items-center  rounded-full shadow-sm hover:shadow-md h-12 border p-3">
                    <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Anywhere</button>
                    <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Any week</button>
                    <button className="border-gray-100 px-4 gray-text text-sm font-medium">Add guests</button>
                    <i className="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2 hover:bg-red-600"></i>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-1">
                    <button className="px-4 py-3 text-sm font-medium hover:bg-gray-100 hover:rounded-full max-md:hidden">Airbnb your
                        home</button>
                    <button className="p-3 flex items-center text-sm font-medium hover:bg-gray-100 hover:rounded-full max-md:hidden">
                        <span className="material-symbols-outlined">language</span>
                    </button>
                    <a href="../Login/index.html"
                        className="flex justify-evenly items-center gap-2 rounded-full border shadow-sm h-10 w-20 py-6 pl-3 pr-2 hover:shadow-md hover:cursor-pointer">
                        <i className="fa-solid fa-bars"></i>
                        <button className="bg-gray-500 text-white rounded-full text-center w-7 h-7"><i
                                className="fa-solid fa-user"></i></button>
                    </a>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
