import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileDetailHeader from '../components/molecules/MobileDetailHeader';

describe('MobileDetailHeader', () => {
    it('debería mostrar el nombre de la persona correctamente', () => {
        const mockOnBack = jest.fn();
        const mockPersonName = 'Luke Skywalker';
        const { getByText } = render(<MobileDetailHeader onBack={mockOnBack} personName={mockPersonName} />);

        const titleElement = getByText(mockPersonName);
        expect(titleElement).toBeInTheDocument();
    });

    it('debería llamar a la función onBack cuando se hace clic en el botón', () => {
        const mockOnBack = jest.fn();
        const mockPersonName = 'Luke Skywalker';
        const { getByLabelText } = render(<MobileDetailHeader onBack={mockOnBack} personName={mockPersonName} />);

        const backButton = getByLabelText('back');
        fireEvent.click(backButton);

        expect(mockOnBack).toHaveBeenCalled();
    });
});
