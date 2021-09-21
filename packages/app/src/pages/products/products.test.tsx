import { render } from '@testing-library/react';

import Products from './products';

describe('SUT: Products', () => {
  it('Should return a valid element on render', () => {
    // ACT
    const result = render(<Products />);

    // ASSERT
    expect(result).not.toBeNull();
  });
});
