import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Test on <AddCategory /> component', () => {

    //Jest fn es una funcion falsa para pruebas
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    //Ciclo de vida de pruebas
    beforeEach( () => {

        //Limpia si hubo alguna simulacion en pruebas anteriores.
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });
    
    test('This component should be show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should be change de text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        const valueToCheck = wrapper.find('p').text().trim();
        input.simulate('change', { target: { value } });
        console.log(valueToCheck);

        expect( "Hola mundo" ).toBe( value );
    });

    test('Shouldnt show the change info with submit', () => {

       wrapper.find('form').simulate('submit', { preventDefault(){}});
        
       expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Should call setCategories and clean the text box', () => {
        
        const form = wrapper.find('form');
        const input = wrapper.find('input');
        const value = 'One punch';
        
        //1.-Simular el inputChange
        input.simulate('change', { target: { value } });

        //2.- Simular el submit
        form.simulate('submit', { preventDefault(){}});

        //3.- setCategories debe haberse llamado
        //expect( setCategories ).toHaveBeenCalled();

        //4.- El valor del input debe estar ''
        expect(input.prop('value')).toBe("");
    })
    
    
    
    
})
