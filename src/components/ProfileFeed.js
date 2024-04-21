import React from 'react';
import { useNostrEvents } from 'nostr-react';

const ProfileFeed = () => {
  const { events } = useNostrEvents({
    filter: {
      authors: ["9c2a6495b4e3de93f3e1cc254abe4078e17c64e5771abc676a5e205b62b1286c"],
      since: 0,
      kinds: [1],
    },
  });

  return (
    <div>
      <h2 className="text-xl font-bold mt-4">Profile Feed</h2>
      {events.map((event) => (
        <p key={event.id}>
          {event.pubkey} posted: {event.content}
        </p>
      ))}
    </div>
  );
};

export default ProfileFeed;
