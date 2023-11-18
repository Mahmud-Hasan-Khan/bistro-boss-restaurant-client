
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosOpen from "../../hooks/useAxiosOpen"
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const axiosOpen = useAxiosOpen();

    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }

                axiosOpen.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="mr-2"></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;