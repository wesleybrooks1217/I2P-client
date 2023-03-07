import { useSelector } from 'react-redux';
import ProfileSettings from './ProfileSettings';

function Settings() {
  const auth = useSelector(state => state.user.isAuthenticated);

  if (!auth) {
    return <div>Please log in to access this page.</div>;
  }

  return (
    <div>
      <h1>Settings</h1>
      <ProfileSettings />
    </div>
  );
}

export default Settings;
