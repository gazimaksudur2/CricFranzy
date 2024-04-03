import { Button } from "@material-tailwind/react";

const Upcoming = () => {
    return (
        <div className="h-[75vh]">
            <div className="relative h-full w-full">
                <div className="h-full w-full rounded-3xl bg-gradient-to-r from-purple-300 to-blue-300 flex items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <img src="https://i.ibb.co/Lt0XzKQ/eee-removebg.png" alt="" />
                    </div>
                    <div className="w-3/4 text-center space-y-2 md:w-2/4">
                        <h1 className="font-exo text-5xl font-semibold">T20<br /><span className="uppercase p-4">cricket</span></h1>
                        <h3 className="text-lg font-normal"># Inter Department Cricket Tournament, SUST</h3>
                        <h2 className="text-xl font-semibold text-white">Tomorrow, 03:00 PM</h2>
                        <h1 className="uppercase text-9xl font-extrabold">vs</h1>
                        <h3 className="text-xl">Match No: 23 <span className="text-sm">of 47</span></h3>
                        <h3 className="">Central Field, SUST</h3>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                    <div className="w-3/4 text-center md:w-2/4">
                        <img src="https://i.ibb.co/S6k6fYV/math-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;

{/* <div className="w-full my-10">
            <div className="Running-info w-[95%] bg-green-400 mx-auto text-center">
                <h2 className="text-3xl font-semibold">Upcoming : </h2>
                <h1 className="">Inter Department Cricket Tournament, SUST</h1>
            </div>
            <div className="slider min-h-[60vh] w-full p-[5%] my-6 mx-auto bg-red-500 rounded-3xl">
                <h2>Next Match: Tomorrow, 12:00 PM</h2>
                <h3>Match No: 23 <span className="text-sm">of 47</span></h3>
                <h3>Central Field, SUST</h3>
            </div>
        </div> */}