
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash} from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false)
    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const photoURL = formData.get('photoURL');
        const password = formData.get('password');

        // Password validation criteria
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const minLength = 6;

        // Check if password meets criteria
        if (
            !uppercaseRegex.test(password) ||
            !lowercaseRegex.test(password) ||
            password.length < minLength
        ) {
            // Password doesn't meet criteria
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return; // Exit function
        }

        try {
            const result = await createUser(email, password);
            console.log(result);

            await updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL
            });

            toast.success('Registration successful!');
            e.target.reset();
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Registration failed. Please try again.');
        }
    }
    return (
        <div>
            <ToastContainer/>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold animate__animated animate__backInDown">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl animate__animated animate__swing ">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative ">
                                <input type={showPassword ? "text" :"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span className="absolute top-4 right-4" onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                                    }
                                </span>
                                </div>
                                <br />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">Already have an account? <Link to='/login'><a className="link link-secondary">Log In</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;