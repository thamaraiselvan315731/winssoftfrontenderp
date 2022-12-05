import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage("user", userData);
    const navigate = useNavigate();
    // eslint-disable-next-line
    const login = async (data) => {
        setUser(data);
        navigate("/home", { replace: true });
    };
    // eslint-disable-next-line
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };
    // eslint-disable-next-line
    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }), // eslint-disable-next-line
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
