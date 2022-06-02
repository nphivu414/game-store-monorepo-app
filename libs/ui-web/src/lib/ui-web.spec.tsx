import { render } from '@testing-library/react';

import UiWeb from './ui-web';

describe('UiWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiWeb />);
    expect(baseElement).toBeTruthy();
  });
});
