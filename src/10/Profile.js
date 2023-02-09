import WelcomeBanner from './WelcomeBanner';
import Course from './Course';

export default function Profile({ user }) {
  return (
    <>
      <WelcomeBanner user={user} />
      <Course user={user} />
    </>
  );
}
