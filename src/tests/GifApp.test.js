import React from "react";
import GifApp from "../GifApp";
import { shallow } from "enzyme";

describe('Pruebas en el GifApp', () => {
    
    const wrapper = shallow( <GifApp /> );

    test('Debe cargar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One Piece', 'Dragon Ball Z'];
        const wrapper = shallow( <GifApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });

});