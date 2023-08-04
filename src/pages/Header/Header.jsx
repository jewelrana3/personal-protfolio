import { Link } from "react-router-dom";
import {useRef} from 'react'
import {  FaBars,FaTimes } from 'react-icons/fa'

const Header = () => {
    const navRef = useRef();

    const showNavber = () =>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header style={{ padding: '8px 9%' }} className="header fixed top-0 left-0 z-10  w-full flex justify-between items-center ">
            <Link className="text-3xl mt-8 font-semibold text-white ">jobewel</Link>

            {/* <div><i className='bx bx-menu' id='menu-icon'></i></div> */}
            <nav ref={navRef} className="">
                <Link className="active">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/education'>Education</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/contact'>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavber}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavber}>
                <FaBars />
            </button>
        </header>
        //     <div className="navbar">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                     {navItem}
        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost normal-case text-2xl">jobewel</a>
        //         </div>
        //         <div className="navbar-end hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 {navItem}
        //             </ul>
        //         </div>
        //         {/* <div className="navbar-end">
        //     <a className="btn">Button</a>
        // </div> */}
        //     </div>
    );
};

export default Header;