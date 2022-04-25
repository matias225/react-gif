import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas con el AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe llamar setCategories y limpiar la caja de texto', () => {

        // defino un valor para la caja de texto y el input
        const value = 'One Piece';
        const input = wrapper.find('input');

        // simulo el inputChange con el valor
        input.simulate('change', { target: { value } });

        // simulo el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // verifico que setCategories se halla llamado una vez
        expect( setCategories ).toHaveBeenCalled();
        
        // que ha sido llamado el set categories por una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // se verifica que el valor del input se halla limpiado
        expect( input.prop('value') ).toBe('');
    });
});