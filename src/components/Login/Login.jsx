import { useContext } from "react";
import { Link,} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        try {
            const result = await signIn(email, password);
            console.log(result.user);
            e.target.reset();
            toast.success('Login successful!');
        } catch (error) {
            console.error(error);
            toast.error('Login failed. Please check your credentials.');
        }
    }
    return (
        // <div>
        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="hero-content flex-col">
        //             <div className="text-center ">
        //                 <h1 className="text-5xl font-bold">Login now!</h1>
                        
        //             </div>
        //             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //                 <form onSubmit={handleLogIn} className="card-body">
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input type="email" placeholder="email" className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input type="password" placeholder="password" className="input input-bordered" required />
        //                         <label className="label">
        //                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                         </label>
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <button className="btn btn-primary">Login</button>
        //                     </div>
        //                 </form>
        //                 <p>Not have a account? <Link to="/register"><a className="link link-secondary">Register Now </a></Link></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
        <ToastContainer />
        <div className="hero min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold animate__animated animate__backInDown">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl animate__animated animate__swing">
                    <form className="card-body p-16" onSubmit={handleLogIn}>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <ul className='flex justify-center list-none gap-8'>
                                {/* <li onClick={handleGoogleSignIn}><FaGoogle /></li>
                                <li onClick={handleGithubSignIn}><FaGithub /></li> */}
                            </ul>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Not have a account? <Link to="/register"><a className="link link-secondary">Register Now </a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;