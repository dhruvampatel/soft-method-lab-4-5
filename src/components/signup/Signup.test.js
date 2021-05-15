import React from 'react';
import '@testing-library/jest-dom';
import Signup from './Signup';
import { screen, render } from '@testing-library/react';

describe('<Signup /> tests', () => {
    it('Signup component should render with all the fields', () => {
        render(<Signup />);
        expect(screen.getByTestId('firstName')).toBeInTheDocument();
        expect(screen.getByTestId('lastName')).toBeInTheDocument();
        expect(screen.getByTestId('email')).toBeInTheDocument();
        expect(screen.getByTestId('password')).toBeInTheDocument();
        expect(screen.getByTestId('repeatPassword')).toBeInTheDocument();
    });
});