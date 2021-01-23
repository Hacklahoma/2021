import React from 'react';
import '../styles/live.scss';

/**
 * Contains the call to action box
 */
const LiveStream = () => (
  <div id="live-stream" className="live-stream">
    <iframe
      title="Hacklahoma Live Stream"
      src="https://www.youtube.com/watch?v=17idkokF28I"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default LiveStream;
