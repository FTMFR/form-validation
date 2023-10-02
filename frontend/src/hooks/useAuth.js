import { useContext } from "react";
import Authcontext from "../context/AuthProvider";


const useAuth = () => {
    const finalAuth = useContext(Authcontext);
    return finalAuth;
};


export default useAuth;


