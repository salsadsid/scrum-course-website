import React from 'react';
import img from '../../assets/img/healthicons_dhis2-logo-outline.png'
const Navbar = () => {
    return (
        <div class="navbar text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><img src={img} alt="" /> SCRUMVERSE</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>HOME</a></li>

                    <li><a>ABOUT</a></li>
                    <li><a>COURSES</a></li>
                    <li><a>BLOGS</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="">LOG IN</a>
                <a class="mr-4 btn btn-outline">SIGN UP</a>
            </div>
        </div>
    );
};

export default Navbar;