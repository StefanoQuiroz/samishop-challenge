import React, { useContext } from 'react';
import DataCell from '../atoms/DataCell';
import { StarWarsContext } from '../../context/Context';
import SubDescription from '../atoms/SubDescription';

const Content = () => {
    const { selectedPerson } = useContext(StarWarsContext);
    if (!selectedPerson) { // Si selectedPerson es null
        return; // No retorna nada
    }

    const { eye_color, hair_color, skin_color, birth_year, vehicles } = selectedPerson;

    return (
        <div style={{ paddingLeft: '22px', paddingRight: '22px' }}>
            <SubDescription message={"General Information"} />

            <DataCell label="Eye Color" value={eye_color} />
            <DataCell label="Hair Color" value={hair_color} />
            <DataCell label="Skin Color" value={skin_color} />
            <DataCell label="Birth Year" value={birth_year} />

            <SubDescription message={"Vehicles"} />

            {vehicles.map((vehicle, index) => (
                <DataCell key={index} label="Vehicle" value={vehicle} />
            ))}
        </div>
    );
    
};

export default Content;
