import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";


const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    const [persist] = useLocalStorage('persist', false);

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshtoken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                isMounted && setIsLoading(false);
            };
        };

        !auth.accessToken ? verifyRefreshtoken() : setIsLoading(false);
        return () => isMounted = false;
    }, []);

    useEffect(() => {
        console.log(`is Loading : ${isLoading}`);
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading]);

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
};

export default PersistLogin;

