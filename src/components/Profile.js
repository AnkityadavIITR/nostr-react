import React from 'react';
import { useProfile } from 'nostr-react';

const Profile = ({ pubkey }) => {
  const { data: userData } = useProfile({ pubkey });

  return (
    <div className="mt-4">
      <p>Name: {userData?.name}</p>
      <p>Public Key: {userData?.npub}</p>
      <p>Picture URL: {userData?.picture}</p>
    </div>
  );
};

export default Profile;
