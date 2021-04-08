import React from 'react';

export const Calendar = () => {
  const date = new Date();

  return (
    <div>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
    </div>
  );
};
