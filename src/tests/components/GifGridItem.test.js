import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
//import toJson from 'enzyme-to-json';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on GifGridItem component', () => {
    const id = 'idoksh455bns';
    const url = 'https://google.com/google-image.jpg';
    const title = 'Google';
    const wrapper = shallow(
        <GifGridItem id={id} url={url} title={title} />
    );

    test('The component should be show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have a parraph with the title', () => {
        const p = wrapper.find('p');

        expect( p.text().trim()).toBe( title );
    });

    test('Should have an image, url and text alt', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Should have class name "animate__fadeIn"', () => {
       const div = wrapper.find('div');
       const className = div.prop('className'); 
       
       expect( className.includes("animate__fadeIn") ).toBe( true );
    });
    
    
    
    
})
