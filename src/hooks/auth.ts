import { useContext } from 'react';
import AuthContext from '../context/context';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
