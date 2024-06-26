import NavBar from '../Basic/NavBar';
import Footer from '../Basic/Footer';
import { Outlet } from 'react-router-dom'
// import Features from '../Basic/Features';
// import Partners from '../Basic/Partners';
// import FAQ from '../Basic/FAQ';

const Root = () => {
    return (
        <div className='min-h-screen font-roboto flex flex-col justify-between'>
            <NavBar/>
            <div className="min-h-[90vh] flex flex-col justify-center items-center">
                <Outlet/>
            </div>
            {/* <Features/>
            <Partners/>
            <FAQ/> */}
            <Footer/>
        </div>
    );
};

export default Root;