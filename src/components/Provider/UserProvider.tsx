import { ReactNode, useState } from "react";
import { User } from "../../types";
import { UserContext } from "../../context/AuthContext";

// UserContext.tsx
interface UserProviderProps {
    children: ReactNode;
  }
  
  export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    // Function to log in the user
    const login = (userData: User) => {
      setUser(userData);
    };
  
    // Function to log out the user
    const logout = () => {
      setUser(null);
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };