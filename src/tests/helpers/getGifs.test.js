import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas para el getGifs Fetch', () => {

    test('Debe traer 10 elementos', async() => {  
        const gifs = await getGifs('One Piece');
        expect( gifs.length ).toBe( 10 );
    });

    test('Debe traer 0 elementos si no se manda categoria', async() => {  
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });
});