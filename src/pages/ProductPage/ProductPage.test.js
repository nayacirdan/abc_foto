import React from 'react';
import { mount } from 'enzyme';
import { unmountComponentAtNode, render } from 'react-dom';
import ProductPage from '../ProductPage/ProductPage';
// import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';

// jest.mock('firebase/app');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Testing ProductPage.js', () => {
  it('valid path should not redirect to 404', () => {
    // const wrapper = mount(
    //     <MemoryRouter initialEntries={[ '/product' ]}>
    //         <App />
    //     </MemoryRouter>
    // );
    // expect(wrapper.find(LandingPage).toHaveLength(1))
    // act(() => {
    //     render(<ProductPage />, container);
    // })
  });
});
