import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas para el GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} /> );

    test('Debe mostrar el componente correctamente', () => {  
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })

    test('Debe contener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const classAnimete = 'animate__fadeIn';

        // 2 Formas
        expect( div.prop('className') ).toContain(classAnimete);
        expect( classAnimete.includes('animate__fadeIn') ).toBe(true);  
    })
});