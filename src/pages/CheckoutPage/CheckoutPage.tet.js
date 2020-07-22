import React from 'react';
import { shallow } from 'enzyme';
import CheckoutPage from './CheckoutPage';

describe('test checkout page', () => {
  it('should render checkout page without props', () => {
    const wrapper = shallow(<CheckoutPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render checkout page with title', () => {
    const wrapper = shallow(<CheckoutPage />);
    const title = wrapper.find('[data-test-id="checkout-page-title"]');
    expect(title).toBeDefined();
  });
});
