import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderTitle from '../components/atoms/HeaderTitle';

describe('HeaderTitle', () => {
    it('debería mostrar el título correcto', () => {
        render(<HeaderTitle text="Prueba" />);

        const titleElement = screen.getByText(/Prueba/i);
        expect(titleElement).toBeInTheDocument();
    });
});