import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, " & ", password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-[60vh]">
            <div className="hero-content w-full flex-col lg:flex-row justify-evenly">
                <div className="w-[50%] min-h-[50vh] flex flex-col justify-center items-center">
                    <img className="w-[70%]" src="https://i.ibb.co/pb4tJrh/cricket-logo.jpg" alt="" />
                    <h1 className="text-4xl my-8 font-exo font-semibold">Cric<span className="text-[#6c6e13bb] text-5xl">F</span>ranzy</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg font-exo">Login</button>
                        </div>
                        <p className="text-sm w-full text-center my-4">New to this Website?<Link to={'/register'} className="text-purple-600 underline"> Register Here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;