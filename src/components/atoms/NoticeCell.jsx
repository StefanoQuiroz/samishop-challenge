import React from 'react';

const NoticeCell = ({ message }) => {
    return (
        <div
            data-testid='notice-cell'
            style={{ textAlign: 'center', padding: '16px', margin:'16px', color: 'rgba(235, 87, 87, 1)' }}
        >
            <h2 style={{ fontSize: '17px' }}>{message}</h2>
        </div>
    );
};

export default NoticeCell;
