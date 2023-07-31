import { Link } from "react-router-dom";


const Header = () => {
    return (
       <header style={{padding:'8px 9%'}} className="fixed top-0 left-0 z-10  w-full flex justify-between items-center bg-transparent">
           <Link className="text-3xl font-semibold text-white">jobewel</Link>
        
        <nav className="navber text-2xl ">
            <Link className="active">Home</Link>
            <Link>About</Link>
            <Link>Project</Link>
            <Link>Contact</Link>
        </nav>

       </header>
    );
};

export default Header;