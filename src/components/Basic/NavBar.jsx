import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { Link } from 'react-scroll'


        {/* <li><Link activeClass="active" to={'/'} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Home</Link></li>
        <li><Link activeClass="active" to={'/features'} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Feautres</Link></li>
        <li><Link activeClass="active" to={'/tournaments'} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Tournaments</Link></li>
        <li><Link activeClass="active" to={'/partners'} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Partners</Link></li>
        <li><Link activeClass="active" to={'/faq'} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>FAQ{`'`}</Link></li> */}

        {/* <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/features'}>Features</NavLink></li>
        <li><NavLink to={'/tournaments'}>Tournaments</NavLink></li>
        <li><NavLink to={'/partners'}>Partners</NavLink></li>
        <li><NavLink to={'/faq'}>FAQ{`'`}s</NavLink></li> */}

        // onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} 

        // {isActive?'text-lg font-medium border-b-4 pb-1 rounded border-[#B2B377]':'text-sm font-normal'}

const NavBar = () => {
    const navLinks = <>
        <li><NavLink className={({isActive})=>isActive?'text-[#131313] text-xl font-medium border-b-4 pb-1 border-[#B2B377]':'text-lg font-normal text-[#131313] p-5'} to={'/'} >Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-[#131313] text-xl font-medium border-b-4 pb-1 border-[#B2B377]':'text-lg font-normal text-[#131313] p-5'} to={'/features'}>Features</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-[#131313] text-xl font-medium border-b-4 pb-1 border-[#B2B377]':'text-lg font-normal text-[#131313] p-5'} to={'/tournaments'}>Tournaments</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-[#131313] text-xl font-medium border-b-4 pb-1 border-[#B2B377]':'text-lg font-normal text-[#131313] p-5'} to={'/partners'}>Partners</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-[#131313] text-xl font-medium border-b-4 pb-1 border-[#B2B377]':'text-lg font-normal text-[#131313] p-5'} to={'/faq'}>FAQ{`'`}s</NavLink></li> 
    </>;

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(()=>{
            console.log(user+' successfully logged out.');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="mx-10 mt-4">
            <div className="sticky top-10 navbar bg-[#F1F5A8] rounded-full px-8 flex flex-row justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-2xl">
                        <img className="w-6" src="https://i.ibb.co/GQDx2dw/cricket.png" alt="logo" />
                        <p>Cric<span className="text-[#6c6e13bb] text-3xl">F</span>ranzy</p>
                    </div>
                </div>
                <div className="navbar-center lg:w-[35%] hidden lg:flex lg:items-center lg:justify-center">
                    <ul className="px-1 w-full flex justify-between items-center gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex justify-end gap-5">
                    <NavLink to={'/login'} className="btn btn-primary">Login</NavLink>
                    <NavLink to={'/register'} className="btn btn-secondary">SignUp</NavLink>
                    <NavLink onClick={handleSignOut} className="btn">SignOut</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;