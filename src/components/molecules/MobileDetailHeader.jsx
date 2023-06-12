import React from 'react';
import IconButton from '../atoms/IconButton';
import HeaderTitle from '../atoms/HeaderTitle';

const MobileDetailHeader = ({ onBack, personName }) => (
    <>
        <IconButton onClick={onBack} />
        <HeaderTitle isCenter text={personName} />
    </>
);

export default MobileDetailHeader;
