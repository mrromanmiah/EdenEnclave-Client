import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters'
            })
            return;
        } if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError('Password must be at least 6 characters long, with at least one capital letter and one special character.')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long, with at least one capital letter and one special character.'
            })
            return;
        }

        signInUser(email, password)
            .then(result => {
                console.log(result);
                setSuccess("Successfully logged in")
                Swal.fire(
                    'Good job!',
                    'Successfully logged in',
                    'success'
                )
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong email or password'
                })
            })
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                setSuccess("Successfully logged in")
                Swal.fire(
                    'Good job!',
                    'Successfully logged in',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong credentials. Please try again'
                })
            })
    }

    document.title = "EdenEnclave | Login";

    return (
        <div className="dark:bg-[#00160c]">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto pt-8 pb-8">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Unlock Your Realm</p>
                <h1 className="text-3xl font-semibold dark:text-white">Login</h1>
                <p className="text-xs dark:text-white">Seamlessly access your personalized universe by simply entering your credentials. Your journey begins with a secure login—where every click opens the door to a world tailored just for you.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4 mb-6 ">
                <div className="text-center space-y-2">
                   
                    <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#05ac39]" type="email" name="email" id="email" placeholder="E-mail" required />
                </div>
                <div className="text-center space-y-4">
                   
                    <div className="relative">
                        <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#05ac39]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                        <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <input className="flex items-center mx-auto bg-[#05ac39] text-white font-bold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black" type="submit" value="Login" />
            </form>


            <div className="divider w-1/3 flex justify-center mx-auto font-medium dark:text-gray-600">OR</div>


            <div className="space-y-2 pb-20">
                <button onClick={handleGoogleLogin} className="btn btn-circle p-1 flex items-center mx-auto"><img src={'https://i.ibb.co/vVdgSTt/google-1.png'} alt="" /></button>
                <p className="text-center dark:text-white">Don't have an account? <Link className="text-[#05ac39] font-bold hover:underline" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;