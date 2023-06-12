import React from 'react';

const HeaderTitle = ({ isCenter, text }) => <h2 style={{ color: 'rgb(255,255,255)', textAlign: isCenter ? 'center' : 'left', fontSize: '17px' }}>{text}</h2>;

export default HeaderTitle;
