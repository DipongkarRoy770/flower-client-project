import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <>
            <div className="w-42 h-48 mx-auto py-3  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>


        </>
    }

    if (user?.email) {
        return children;
    }
    return (
        // <Navigate state={{from:location}} to='/login' replace={true}></Navigate>
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRouter;