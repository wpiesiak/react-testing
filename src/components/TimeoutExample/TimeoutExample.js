import React, { useEffect, useState } from 'react';

export const TimeoutExample = (props) => {
  const [ready, setReady] = useState(false);

  const activate = () => {
    return setReady(true);
  };

  useEffect(() => {
    setTimeout(activate, 5000);
  }, []);

  if (ready) {
    return <h4>You are here 5 seconds! Congrats!</h4>;
  }

  return null;
};
