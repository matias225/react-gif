import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas para el GifGrid', () => {
    
    const category = 'One Piece';
    
    test('Debe mostrar el componente correctamente con la categoria', () => {  
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {  
        const gifs = [{
            id: 'abc',
            url: 'https://localhost/cualquercosa.jpg',
            title: 'cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquercosa2.jpg',
            title: 'cualquier cosa 2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

});