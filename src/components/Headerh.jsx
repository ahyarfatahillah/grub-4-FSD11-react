import { Link } from "react-router-dom";
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import React from 'react';
import DropdownMenu from './Atoms/DropDownMenu' // Import the DropdownMenu component
function onSelect({ key }) {
    console.log(`${key} selected`);
}
const Header = () => {
    return (
        <header>
            <div className="h-20 w-screen py-[10px] flex justify-between ps-8 pe-16 w-screen border-b-[1px] items-center fixed top-0 bg-white z-50">
                <Link to="/"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                    className=" object-cover w-28"
                /></Link>
                <div className="pl-[200px] px-8 max-sm:hidden">
                    <div className="flex items-center justify-start w-[340px] rounded-full shadow-sm hover:shadow-md h-12 border">
                        <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">
                            Anywhere
                        </button>
                        <button className="border-r-2 border-gray-100 px-2 text-sm font-medium">
                            Any week
                        </button>
                        <button className="border-gray-100 px-4 gray-text text-sm font-medium">
                            Add guests
                        </button>
                        <i className="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2 hover:bg-red-600" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-end items-center gap-1">
                        <button className="px-4 py-3 text-sm font-medium hover:bg-gray-100 hover:rounded-full">
                            Airbnb your home
                        </button>
                        <button className="p-3 flex items-center text-sm font-medium hover:bg-gray-100 hover:rounded-full">
                            <span className="material-symbols-outlined">language</span>
                        </button>
                        <div>
                            <div className="flex justify-end items-center gap-1">
                                <DropdownMenu onSelect={onSelect} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Catagory */}
            <div className="flex items-center shadow-sm  h-24 w-screen space-x-5 fixed top-[80px] bg-white z-40 max-md:hidden">
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-8">
                        <img
                            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Amazing pools</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Play</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Historical homes</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Countryside</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Surfing</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Farms</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Amazing views</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Rooms</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="	https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Lakefront</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="	https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Beachfront</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">OMG!</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Golfing</p>
                    </div>
                </div>
                <span className="material-symbols-outlined pl-4">arrow_circle_right</span>
                <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border max-lg:hidden">
                    <span className="material-symbols-outlined">sync_alt</span>
                    <p className="text-xs font-normal">Filters</p>
                </div>
                <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-[220px] border max-xl:hidden">
                    <p className="text-xs font-normal">Display total before taxes</p>
                    <span className="material-symbols-outlined">toggle_off</span>
                </div>
            </div>
        </header>
    )
}

export default Header;
