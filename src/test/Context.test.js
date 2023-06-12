import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { StarWarsProvider, StarWarsContext } from '../context/Context';
import axios from 'axios';

jest.mock('axios');

describe('StarWarsContext', () => {
    it('debería cargar datos de personas correctamente', async () => {
        const mockData = {
            name: 'Luke Skywalker',
            eye_color: 'blue',
            hair_color: 'blond',
            skin_color: 'fair',
            birth_year: '19BBY',
            species: ['https://swapi.dev/api/species/1/'],
            homeworld: 'https://swapi.dev/api/planets/1/',
            vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
        };

        axios.get
            .mockResolvedValueOnce({
                data: {
                    results: [mockData],
                },
            })
            .mockResolvedValueOnce({
                data: {
                    name: 'Human',
                },
            })
            .mockResolvedValueOnce({
                data: {
                    name: 'Tatooine',
                },
            })
            .mockResolvedValueOnce({
                data: {
                    name: 'Snowspeeder',
                },
            })
            .mockResolvedValueOnce({
                data: {
                    name: 'Imperial Speeder Bike',
                },
            });

        let receivedContext = {};

        render(
            <StarWarsProvider>
                <StarWarsContext.Consumer>
                    {(context) => {
                        receivedContext = context;
                        return null;
                    }}
                </StarWarsContext.Consumer>
            </StarWarsProvider>
        );

        await waitFor(() => expect(receivedContext.loading).toBe(false), { timeout: 20000 });

        expect(receivedContext.error).toBe(null);
        expect(receivedContext.peopleData[0]).toEqual({
            name: mockData.name,
            eye_color: mockData.eye_color,
            hair_color: mockData.hair_color,
            skin_color: mockData.skin_color,
            birth_year: mockData.birth_year,
            specie: 'Human',
            planet: 'Tatooine',
            vehicles: ['Snowspeeder', 'Imperial Speeder Bike'],
        });
    });
});
