'use client'
import { useAuth } from '../../../lib/authContext';

const SignOutButton = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <button onClick={signOut}>
      Sign Out
    </button>
  );
};


export default SignOutButton;