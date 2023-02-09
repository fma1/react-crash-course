import { UserContext } from './UserContext_3';
import { useContext } from 'react';

export default function Course() {
  const { user } = useContext(UserContext);
  return <p>Your course is {user.course}</p>;
}
