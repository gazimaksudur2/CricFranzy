const Banner = () => {
    return (
        <div className="flex justify-between items-center min-h-[60vh] my-20 bg-gradient-to-r from-[#F1F5A8] via-[#F1F5A8ba] to-white bg- rounded-2xl p-[4%]">
            <div className="text-holder w-[50%] py-[5%] flex flex-col justify-between items-start gap-8">
                <h2 className="font-exo text-6xl font-bold">Elevate your experience with <span className="text-[#B2B377]">Ultimate Cricket</span> Management Solution</h2>
                <p className="font-roboto text-lg font-normal">Step into the world of cricket excellence with CricFranzy, the premier online sports management platform.Stay connected, stay informed, and elevate your cricket experience with CricFranzy!</p>
                <div className="flex justify-between items-center gap-5">
                    <button className="btn btn-outline font-semibold text-lg hover:text-[#131313] hover:bg-[#B2B377]">Tournaments</button>
                    <button className="btn btn-outline font-semibold text-lg text-white hover:text-[#131313] bg-[#6c6e13] hover:bg-[#B2B377]">Learn More</button>
                </div>
            </div>
            <img className="w-[40%]" src="https://img.freepik.com/free-vector/ipl-cricket-illustration-hand-drawn-style_23-2149201607.jpg?t=st=1712032618~exp=1712036218~hmac=343d35fbf31b407c765a7f4061a43de2f37dc3b09d5be3a640bb64f700b2a795&w=826" alt="banner image" />
        </div>
    );
};

export default Banner;