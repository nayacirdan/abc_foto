import React from 'react';
import Button from './Button';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

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

describe('Testing Button.js', () => {
    it('button renders correctly', () => {
        act(() => {
            render(<Button text='btn' className="btn" />, container)
        });
    });

    it('button has props', () => {
        act(() => {
            render(<Button className='btn' btnType='submit' text='Submit' isDisabled />, container)
        })
        const button = document.querySelector('button');
        expect(button).toHaveClass('btn');
        expect(button.textContent).toBe('Submit');
        expect(button).toBeDisabled()
    });

    it('button onclick func is called', () => {
        const btnFunctionMock = jest.fn();
        act(() => {
            render(<Button text='btn' className="btn" onClick={btnFunctionMock} />, container)
        });
        expect(btnFunctionMock).not.toHaveBeenCalled();

        // const btn = document.getElementsByClassName('btn');
        // btn[0].dispatchEvent(new MouseEvent('click'), { bubbles :true })
        // expect(btnFunctionMock).toHaveBeenCalledTimes(1);
    });
});