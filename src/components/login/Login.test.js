import React from 'react';
import '@testing-library/jest-dom';
import Login from './Login';
import { screen, render } from '@testing-library/react';

describe('<Login /> tests', () => {
    it('Login component should render with all the fields', () => {
        render(<Login />);
        expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
        expect(screen.getByTestId('input-email')).toBeInTheDocument();
        expect(screen.getByTestId('input-pass')).toBeInTheDocument();
    });
});