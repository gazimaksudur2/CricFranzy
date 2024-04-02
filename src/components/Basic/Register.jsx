import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [Error, setError] = useState('');
    const [Success, setSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        const terms = e.target.terms.checked;

        console.log(email, " & ", password, " & ", name, " & ", confirm, " & ", terms);
        // console.log(authInfo);

        setError('');
        setSuccess('');

        if(password!==confirm){
            setError("Password is mismatching in confirmation!!");
            return;
        }else if(password.length < 8){
            setError("Minimum Password length is not satisfied!!");
            return;
        }else if((password.toLowerCase()).includes('password')){
            setError("Password should not contain 'password' string!!");
            return;
        }else if(password===(password.toLowerCase())){
            setError('Password should have atleast one Capital Letter!!');
            return;
        }else if(/(?=.*[!@#$%^&*()_+}{"':;?/|.<,>])/.test(password)){
            setError("Password should contain atleast a special character!!");
            return;
        }else if(!terms){
            setError("Terms & Conditions must be accepted!!");
            return;
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError("Provide a valid email address!!");
            return;
        }


        // ^(?!.*password)(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/|.<,>])(?=.*[a-zA-Z]).{8,30}$

        createUser(email, password)
        .then(result => {
            setSuccess("User Created Successfully !!");
            console.log(result.user);
        })
        .catch(error=> {
            setError(((error.message).split('/')[1]).split(')')[0]+' !!');
        });
    }
    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content w-full flex-col lg:flex-row-reverse justify-evenly">
                <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
                    <img className="w-[80%]" src="https://i.ibb.co/bWbRbst/banner3.jpg" alt="" />
                    <h1 className="text-4xl my-8 font-exo font-semibold">Cric<span className="text-[#6c6e13bb] text-5xl">F</span>ranzy</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body font-roboto font-normal">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm" placeholder="Confirm password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="terms flex justify-center items-center gap-2">
                            <input name="terms" type="checkbox" className="checkbox" />
                            <p className="text-sm font-exo">Accept <a className="hover:underline text-purple-500" href="http://">Terms & Conditions</a></p>
                        </div>
                        {
                            Error&& <p className="text-sm mt-3 text-red-400">{Error}</p>
                        }
                        {
                            Success&& <p className="text-sm mt-3 text-green-400">{Success}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg font-exo">Register</button>
                        </div>
                        <p className="text-sm w-full text-center my-4">Already Registered?<Link to={'/login'} className="text-purple-600 underline"> login Here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;