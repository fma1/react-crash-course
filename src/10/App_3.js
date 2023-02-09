import Profile from './Profile_3';
import { UserContext, UserContextProvider } from './UserContext_3';
import { useContext } from 'react';

export default function App() {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}
