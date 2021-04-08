import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacter } from '../../store/character/actions';

export const CharacterDetails = (props) => {
  const { fetchCharacter, character } = props;

  useEffect(() => {
    fetchCharacter(5);
  }, []);

  console.log(character);
  if (!character) {
    return 'Loading...';
  }

  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} />
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

const mapStateToProps = ({ character }) => {
  return {
    character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacter: (id) => dispatch(getCharacter(id)),
  };
};

CharacterDetails.propTypes = {
  fetchCharacter: PropTypes.func,
  character: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
