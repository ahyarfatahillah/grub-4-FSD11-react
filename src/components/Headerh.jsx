import { Link } from "react-router-dom";
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import React from 'react';
import DropdownMenu from './Atoms/DropDownMenu';
import IsHidden from "./Atoms/IsHidden";

function onSelect({ key }) {
    console.log(`${key} selected`);
}

const Header = ({ isHidden }) => {
    const visibilityClass = IsHidden({ data: isHidden });

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
                        <Link to="/Host" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 hover:rounded-full">
                            Airbnb your home
                        </Link>
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
            <div className={`${visibilityClass} flex items-center shadow-sm h-24 w-screen space-x-5 fixed top-[80px] bg-white z-40 max-md:hidden`}>
                <div className="flex items-center space-x-3">
                    <Link to="/TinyHomes">
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-8">
                            <img
                                src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                                alt="Tiny Homes"
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Tiny Homes</p>
                        </div>
                    </Link>
                    <Link to="/Cabins">
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                            alt="Cabins"
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Cabins</p>
                    </div>
                    </Link>
                    <Link to="/Apartements">
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                            alt=""
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Apartements</p>
                    </div>
                    </Link>
                    <Link to="/Mansions">
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
                            alt="Apartements"
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Mansions</p>
                    </div>
                    </Link>
                    <Link to="/Rooms">
                    <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                        <img
                            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                            alt="Mansions"
                            className="h-7"
                        />
                        <p className="text-xs font-normal">Rooms</p>
                    </div>
                    </Link>
                </div>
                {/* <span className="material-symbols-outlined pl-4">arrow_circle_right</span> */}
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
