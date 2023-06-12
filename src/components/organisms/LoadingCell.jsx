import React from 'react';
import LoadingIndicator from '../atoms/LoadingIndicator';

const LoadingCell = () => {
    return (
        <div
            data-testid='loading-cell'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
                margin: '16px',
            }}
        >
            <LoadingIndicator />
        </div>
    );
};

export default LoadingCell;
