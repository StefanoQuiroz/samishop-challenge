import React from 'react';

const DataCell = ({ label, value }) => {
    const valueFormatted = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', margin: '16px', borderBottom: '1.5px solid #a8a8a8' }}>
            {value ? (
                <>
                    <h2 style={{ color: 'rgba(0, 0, 0, 3)', fontSize: '17px' }}>{label}</h2>
                    <h2 style={{ color: 'rgba(0, 0, 0, 1)', fontSize: '17px', fontWeight: 'bold' }}>{valueFormatted}</h2>
                </>
            ) : (
                <h2 style={{ color: 'rgba(0, 0, 0, 3)', fontSize: '17px' }}>{label}</h2>
            )}
        </div>
    );
};

export default DataCell;
