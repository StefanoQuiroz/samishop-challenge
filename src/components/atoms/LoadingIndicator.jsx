import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingIndicator = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner
                animation='border'
                role='status'
                style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    marginRight: '10px',
                    borderWidth: '0.2rem',
                    borderTopColor: 'rgba(0,0,0,0.5)',
                }}
            />
            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '16px', fontWeight: 'bold', alignSelf: 'center', marginTop: '1rem' }}>Loading</p>
        </div>
    );
};

export default LoadingIndicator;
