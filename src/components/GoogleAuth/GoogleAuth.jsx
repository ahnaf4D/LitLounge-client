import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
    return (
        <div>
            <>
                <button className="btn btn-primary btn-outline text-xl">
                    <FaGoogle className="h-6 w-6 mr-2"></FaGoogle>
                    Google Login
                </button>
            </>

        </div>
    );
};

export default GoogleAuth;