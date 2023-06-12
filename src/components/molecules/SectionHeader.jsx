import React from 'react';
import HeaderTitle from '../atoms/HeaderTitle';

const SectionHeader = ({ isCenter, text }) => {
    return (
        <div>
            <HeaderTitle isCenter={isCenter} text={text} />
        </div>
    );
};

export default SectionHeader;
