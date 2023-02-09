import { createContext, useState } from 'react';

const steve = {
  name: 'Steve',
  course: 'Math'
};

const joe = {
  name: 'Joe',
  course: 'English'
};

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null
  }
});

export function UserContextProvider({children}) {
  const [user, setUser] = useState(steve);

  const toggleUser = () => {
    if (user === steve) {
      setUser(joe);
    } else {
      setUser(steve);
    }
  }

  return (
    <UserContext.Provider value={{user, toggleUser}}>
      {children}
    </UserContext.Provider>
  );
}
