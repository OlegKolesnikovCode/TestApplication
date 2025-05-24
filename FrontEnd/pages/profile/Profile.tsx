/*import React from 'react';


const Profile = () => {
    return (
        <>
            <h1>EMPTY</h1>
        </>
    );
};
export default Profile;
*/

import React from 'react';

interface ProfileProps {
  openModal: string;
}

const Profile: React.FC<ProfileProps> = ({ openModal }) => {
  return (
    <div>
      <h2>Profile Component</h2>
      <p>Modal Opened For: {openModal}</p>
    </div>
  );
};

export default Profile;