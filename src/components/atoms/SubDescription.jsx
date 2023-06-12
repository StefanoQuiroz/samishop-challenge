import React from 'react';

const SubDescription = ({ message }) => {
    return (
        <div style={{ textAlign: 'left', padding: '16px', margin: '16px', color: 'rgba(0, 0, 0, 1)' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 'Bold' }}>{message}</h2>
        </div>
    );
};

export default SubDescription;
