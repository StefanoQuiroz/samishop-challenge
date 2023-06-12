import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creamos el Contexto
export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
    const [peopleData, setPeopleData] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    const selectPersonAndShowDetail = (person) => {
        setSelectedPerson(person);
        setShowDetail(true);
    };

    const fetchPeopleData = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/people/');
            const people = response.data.results;

            people.forEach(async (person) => {
                try {
                    const speciesPromise = person.species.length > 0 ? axios.get(person.species[0]) : Promise.resolve(null);
                    const planetPromise = axios.get(person.homeworld);
                    const vehiclesPromises = person.vehicles.map((vehicle) => axios.get(vehicle));

                    const [speciesResponse, planetResponse, ...vehiclesResponses] = await Promise.all([speciesPromise, planetPromise, ...vehiclesPromises]);

                    const newPersonData = {
                        name: person.name,
                        eye_color: person.eye_color,
                        hair_color: person.hair_color,
                        skin_color: person.skin_color,
                        birth_year: person.birth_year,
                        specie: speciesResponse ? speciesResponse.data.name : 'Human',
                        planet: planetResponse.data.name,
                        vehicles: vehiclesResponses.map((res) => res.data.name),
                    };

                    setPeopleData((oldPeopleData) => {
                        const updatedPeopleData = [...oldPeopleData, newPersonData];
                        console.log(updatedPeopleData);
                        return updatedPeopleData;
                    });
                } catch (error) {
                    console.error('Failed to Load Data', error);
                }
            });
        } catch (error) {
            console.error('Failed to Load Data', error);
            setError('Failed to Load Data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPeopleData();
    }, []);

    return (
        <StarWarsContext.Provider
            value={{ peopleData, loading, error, selectedPerson, setSelectedPerson, showDetail, setShowDetail, selectPersonAndShowDetail }}
        >
            {children}
        </StarWarsContext.Provider>
    );
};
