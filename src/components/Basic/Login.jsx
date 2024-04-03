import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Login = () => {
    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, " & ", password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
            navigate('/');
        })
        .catch(error=> console.log(error.message))
    }

    const handleGithub = () =>{
        githubSignIn()
        .then(res=>{
            console.log(res.user);
            navigate('/');
        })
        .catch(error=> console.log(error.message))
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
                        <div className="form-control mt-2">
                            <button className="btn btn-primary text-lg font-exo">Login</button>
                        </div>
                        <p className="text-sm w-full text-center mb-2">New to this Website?<Link to={'/register'} className="text-purple-600 underline"> Register Here</Link></p>
                        <div className="divider">OR</div>
                        <div className="cont-lgin flex flex-col items-center gap-2">
                            <div onClick={handleGoogle} className="btn border-2 px-4 py-2 rounded-full flex justify-center items-center gap-2">
                                <FcGoogle size={20}/>
                                <p>Continue with Google</p>
                            </div>
                            <div className="btn border-2 px-4 py-2 rounded-full flex justify-center items-center gap-2">
                                <FaFacebook size={20} color="blue"/>
                                <p>Continue with Facebook</p>
                            </div>
                            <div onClick={handleGithub} className="btn border-2 px-4 py-2 rounded-full flex justify-center items-center gap-2">
                                <VscGithubInverted size={20}/>
                                <p>Continue with Github</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;