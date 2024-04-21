import React from 'react';
import { NostrProvider } from 'nostr-react';
import GlobalFeed from './components/GlobalFeed';
import ProfileFeed from './components/ProfileFeed';
import PostButton from './components/PostButton';

const relayUrls = [
  "wss://relay.damus.io",
  "wss://relay.snort.social",
  "wss://nostr-pub.wellorder.net",
  "wss://relay.nostr.ch",
  "wss://nostr.jcloud.es"
];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <div className="min-h-screen bg-white text-orange-600 p-6">
        <h1 className="text-2xl font-bold mb-4">Nostr React App</h1>
        <PostButton />
        <GlobalFeed />
        {/* <ProfileFeed /> */}
      </div>
    </NostrProvider>
  );
}

export default App;
