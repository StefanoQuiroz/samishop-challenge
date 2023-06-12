import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const IconButton = ({ onClick }) => (
    <button aria-label='back' onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', left: 0 }}>
        <IoIosArrowBack size={24} color='white' />
    </button>
);

export default IconButton;
