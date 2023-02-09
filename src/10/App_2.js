import { useState } from 'react';
import Profile from './Profile_2';
import { UserContext } from './UserContext';

const steve = {
  name: 'Steve',
  course: 'Math'
};

const joe = {
  name: 'Joe',
  course: 'English'
};

export default function App() {
  const [user, setUser] = useState(steve);

  const toggleUser = () => {
    if (user === steve) {
      setUser(joe);
    } else {
      setUser(steve);
    }
  }

  return (
    <main>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
      <button onClick={toggleUser}>Toggle User</button>
    </main>
  );
}

