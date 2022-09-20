import React from 'react';
import { Blockquote } from '@mantine/core';
import "../dashboardstyles.css"
import { Flame } from 'tabler-icons-react';

function Notifications() {
  return (
    <div className='notification-container'>
    <Blockquote
      cite="-Click to view"
      icon={<Flame size={24} />}
    >
        3 New Recommendations for You
    </Blockquote>
    </div>
  );
}

export default Notifications;