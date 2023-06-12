import React, { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { StarWarsContext } from '../../context/Context';

const PersonCell = ({ name, specie, planet, person }) => {
    const { selectPersonAndShowDetail } = useContext(StarWarsContext);
    return (
        <div
            style={{
                margin: '0px 0',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                borderBottom: '1.5px solid #c2c0c0',
                borderRight: '1.5px solid #c2c0c0',
            }}
            onClick={() => selectPersonAndShowDetail(person)}
        >
            <div style={{ marginRight: '10px' }}>
                <h2 style={{ marginBottom: '0', fontSize: '17px', fontWeight: 'bolder', color: 'rgba(0,0,0,1)' }}>{name}</h2>
                <p style={{ margin: '0px', color: 'rgba(0,0,0,3)', fontSize: '17px' }}>
                    {specie} from {planet}
                </p>
            </div>
            <IoIosArrowForward size={20} />
        </div>
    );
};

export default PersonCell;
