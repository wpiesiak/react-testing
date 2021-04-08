import { render } from '@testing-library/react';
import React from 'react';
import { TimeoutExample } from './TimeoutExample';

test('text should appear after some timeout', () => {
  jest.useFakeTimers();
  const { container } = render(<TimeoutExample />);
  expect(container.firstChild).toBeNull();

  jest.advanceTimersByTime(5000);
  expect(container.firstChild).toHaveTextContent('You are here 5 seconds! Congrats!');
});
