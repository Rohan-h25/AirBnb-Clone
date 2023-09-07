import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    //useEffect does not like async function. 
    useEffect(() => {
        // User does not exist then we check if there is a token.
        // If there is a token the we get the data from token and login.
        if (!user) {
            axios.get("/profile").then(({data}) => {
                setUser(data);
                setReady(true);
            });
        }
    }, []);
    return ( 
        <UserContext.Provider value={{user,setUser,ready}}>
            {children} 
        </UserContext.Provider>   
    );
}