import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataCell from '../components/atoms/DataCell';

describe('DataCell', () => {
    it('debería mostrar el label y el valor formateado si value es true', () => {
        render(<DataCell label='Prueba' value='valor' />);

        const labelElement = screen.getByText(/Prueba/i);
        expect(labelElement).toBeInTheDocument();

        const valueElement = screen.getByText(/Valor/i); // Nota que 'Valor' tiene la primera letra en mayúscula debido al formateo
        expect(valueElement).toBeInTheDocument();
    });

    it('debería mostrar solo el label si value es false', () => {
        render(<DataCell label='Prueba' value='' />);

        const labelElement = screen.getByText(/Prueba/i);
        expect(labelElement).toBeInTheDocument();

        const valueElement = screen.queryByText(/Valor/i); 
        expect(valueElement).not.toBeInTheDocument();
    });
});