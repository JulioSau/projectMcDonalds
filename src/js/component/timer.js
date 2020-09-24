import React from 'react';


 
// Random component
const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
export const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};
 