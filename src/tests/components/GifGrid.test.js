import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test on <GifGrid /> component', () => {
    

    const category = "Batman";
    
    test('Snapshot of component', () => {
        const wrapper = shallow(<GifGrid category= { category }/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should be show items when the load is done useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com/google.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category= { category }/>);


        expect(wrapper.find('p').exists()).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
    
});
