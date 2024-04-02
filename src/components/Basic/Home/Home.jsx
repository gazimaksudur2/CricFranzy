import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Banner from "./Banner";
import Pera from "./Pera";
import Running from "./Running";
import Upcoming from "./Upcoming";
import Previous from "./Previous";

const Home = () => {
    const authInfo = useContext(AuthContext)

    console.log(authInfo);
    return (
        <div className="mx-auto w-[92%] mb-16">
            <Banner/>
            <Pera/>
            <Running/>
            <Upcoming/>
            <Previous/>
        </div>
    );
};

export default Home;