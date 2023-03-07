// components/UserMissions.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMissions } from './actions';

const UserMissions = ({ fetchMissions, missions, user }) => {
  useEffect(() => {
    fetchMissions();
  }, [fetchMissions]);

  const userMissions = missions.filter(mission => mission.user === user.id);

  return (
    <ul>
      {userMissions.map(mission => (
        <li key={mission.id}>{mission.title} - {mission.completed ? 'Completed' : 'Not Completed'}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return { missions: state.missions, user: state.user };
};

export default connect(mapStateToProps, { fetchMissions })(UserMissions);
