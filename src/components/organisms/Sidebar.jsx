import React, { useContext } from 'react';
import PersonCell from '../molecules/PersonCell';
import LoadingCell from './LoadingCell';
import NoticeCell from '../atoms/NoticeCell';
import { StarWarsContext } from '../../context/Context';

const Sidebar = () => {
    const { peopleData, loading, error } = useContext(StarWarsContext);

    if (error) {
        return <NoticeCell message={error} />;
    }

    return (
        <div className='d-flex flex-column p-3'>
            {peopleData.map((person, index) => (
                <PersonCell 
                    name={person.name} 
                    specie={person.specie} 
                    planet={person.planet} 
                    person={person} 
                    key={index} 
                />
            ))}
            {( loading || peopleData.length < 10) && <LoadingCell />}
        </div>
    );
};

export default Sidebar;
