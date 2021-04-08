import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ character }) => {
  return (
    <div className="character">
      <h3>{character.name} </h3>
      <p>
        gender: {character.gender}, status: {character.status}
      </p>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
  }),
};
