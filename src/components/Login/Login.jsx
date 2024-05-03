import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mt-4 mb-4">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body p-16" >
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
                                <p>Not have a account? <Link to="/Register">Register Now.</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;