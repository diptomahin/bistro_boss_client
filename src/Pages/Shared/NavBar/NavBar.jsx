import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navLinks = <>
    <li><NavLink to="/" style={({isActive}) => {
        return{
            color: isActive ? "#EEFF25" : "white",
           
        }
    }}>Home</NavLink></li>
    <li><NavLink to="/contact" style={({isActive}) => {
        return{
            color: isActive ? "#EEFF25" : "white",
           
        }
    }}>CONTACT US</NavLink></li>
    <li><NavLink to="/dashboard" style={({isActive}) => {
        return{
            color: isActive ? "#EEFF25" : "white",
           
        }
    }}>DASHBOARD</NavLink></li>
    <li><NavLink to="/menu" style={({isActive}) => {
        return{
            color: isActive ? "#EEFF25" : "white",
           
        }
    }}>Our Menu</NavLink></li>
    <li><NavLink to="/shop/salad" style={({isActive}) => {
        return{
            color: isActive ? "#EEFF25" : "white",
           
        }
    }}>Our Shop</NavLink></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href="/">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;