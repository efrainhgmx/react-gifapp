import React  from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    const wrapper = shallow( <GifExpertApp /> );

    test('Should math with the snapshoot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
