import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';
import Content from '../organisms/Content';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/Context';

const MainLayout = () => {
    const { selectedPerson, setSelectedPerson, showDetail, setShowDetail, selectPersonAndShowDetail } = useContext(StarWarsContext);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleBack = () => {
        setSelectedPerson(null);
        setShowDetail(false);
    };

    return (
        <Container fluid>
            <Row>
                <Header isDetailView={showDetail} onBack={handleBack} personName={selectedPerson?.name} />
            </Row>
            <Row>
                {isMobile && showDetail ? (
                    <Col xs={12}>
                        <Content />
                    </Col>
                ) : (
                    <>
                        <Col xs={12} md={4}>
                            <Sidebar onSelect={selectPersonAndShowDetail} />
                        </Col>
                        {!isMobile && (
                            <Col xs={12} md={8}>
                                {showDetail && <Content />}
                            </Col>
                        )}
                    </>
                )}
            </Row>
        </Container>
    );
};

export default MainLayout;
