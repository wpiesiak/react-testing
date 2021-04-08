import { Calendar } from './Calendar';
import MockDate from 'mockdate';
import { render } from '@testing-library/react';
import React from 'react';

MockDate.set('2020-01-03');

it('should render date in proper format', () => {
  const { container } = render(<Calendar />);
  expect(container.firstChild).toHaveTextContent('2020-1-3');
});
