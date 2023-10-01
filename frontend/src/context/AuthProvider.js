import { createContext, useState } from "react";

const Authcontext = createContext({});


export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({});

    return (
        <Authcontext.Provider
            value={{ auth, setAuth }}
        >
            {props.children}
        </Authcontext.Provider>
    )
};

export default Authcontext;