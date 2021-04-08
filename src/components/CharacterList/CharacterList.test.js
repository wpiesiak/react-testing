import { CharacterList } from './CharacterList';
import React from 'react';
import { render } from '@testing-library/react';

jest.mock('../../services/rickmortyapi');

it('fetch character list and render them on mount ', async () => {
  const { findAllByText } = render(<CharacterList />);

  const characters = await findAllByText('Character name');

  expect(characters).toHaveLength(3);
});
