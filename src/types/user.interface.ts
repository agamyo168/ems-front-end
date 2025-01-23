// types.ts
interface User {
  id: string;
  username: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
export default User;
