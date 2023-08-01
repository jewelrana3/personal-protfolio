import { Link } from "react-router-dom";


const Header = () => {
    return (
       <header style={{padding:'8px 9%'}} className="fixed top-0 left-0 z-10  w-full flex justify-between items-center bg-transparent">
           <Link className="text-3xl font-semibold text-white">jobewel</Link>
        
        <nav className="navber text-2xl ">
            <Link className="active">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/education'>Education</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact</Link>
        </nav>

       </header>
    );
};

export default Header;