import { ReactNode, createContext, useCallback, useMemo, useState } from "react";
import User from "../types/User";
import AuthService from "../services/AuthService";
import Cookies from "js-cookie";

interface ICreateContext {
    user: null | User;
    formatedName: string;
    loadMe: () => Promise<void>;
    isAuth: () => boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<ICreateContext>({} as ICreateContext);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<null | User>(null);

    const loadMe = useCallback(async () => {
        if(!user) {
            const user = await AuthService.me();
            setUser(user);
        }
    }, [user]);

    function isAuth(){
        const isUserLogged = Cookies.get('token');
        return Boolean(isUserLogged);
    }

    const formatedName = useMemo(() => {
        const name = user?.name || '';
        const splitedName = name.split(' ');
        
        if(splitedName.length > 1) {
            return `${splitedName[0]} ${splitedName[splitedName.length - 1]}`
        }

        return name;
    }, [user]);

    return (
        <UserContext.Provider value={{ user, formatedName, isAuth, loadMe }}>
            {children}
        </UserContext.Provider>
    )
}