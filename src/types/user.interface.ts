// types.ts
interface User {
  username: string;
  password: string;
}

export interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
export default User;
