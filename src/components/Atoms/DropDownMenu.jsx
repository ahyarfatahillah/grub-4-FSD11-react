import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import { Link } from "react-router-dom";
import 'rc-dropdown/assets/index.css';

function DropdownMenu({ onSelect }) {
    const menu = (
        <Menu onSelect={onSelect}>
            <MenuItem key="/Profile" className="text-center">Profile</MenuItem>
            <Link to="/Wishlist"><MenuItem key="Wishlist" className="text-center">Wishlist</MenuItem></Link>
            <Link to="/Login"><MenuItem key="Login" className="text-center">Login</MenuItem></Link>
        </Menu>
    );

    return (
        <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
                <div className="flex justify-evenly items-center gap-2 rounded-full border shadow-sm h-10 w-20 py-6 pl-3 pr-2 hover:shadow-md hover:cursor-pointer">
                    <i className="fa-solid fa-bars" />
                    <div>
                        <button className="bg-gray-500 text-white rounded-full text-center w-7 h-7">
                            <i className="fa-solid fa-user" />
                        </button>
                    </div>
                </div>
        </Dropdown>
    );
}

export default DropdownMenu;
