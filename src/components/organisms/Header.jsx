import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import MobileDetailHeader from '../molecules/MobileDetailHeader';
import SectionHeader from '../atoms/HeaderTitle';
import { StarWarsContext } from '../../context/Context';

const Header = ({ isDetailView, onBack, personName }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { loading } = useContext(StarWarsContext);

    let headerText;
    if (isMobile) {
        if (loading) {
            headerText = 'People of Star Wars';
        } else {
            headerText = 'People';
        }
    } else {
        headerText = 'Ravn Star Wars Registry';
    }

    return (
        <Col xs={12} style={{ backgroundColor: '#121212',  padding: '36px 16px 8px 16px'}}>
            <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'start', alignItems: 'center', width: '100%' }}>
                {isMobile && isDetailView ? (
                    <MobileDetailHeader onBack={onBack} personName={personName} />
                ) : (
                    <SectionHeader isCenter={isMobile} text={headerText} />
                )}
            </div>
        </Col>
    );
};

export default Header;
