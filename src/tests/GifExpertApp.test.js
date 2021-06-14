import React  from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    
    test('Should math with the snapshoot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('Should be show a list of categories', () => {
        const categories = ['Batman', 'One Punch', 'DC Legends'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
