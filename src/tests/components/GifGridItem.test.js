import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
//import toJson from 'enzyme-to-json';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on GifGridItem component', () => {
    const id = 'idoksh455bns';
    const url = 'https://google.com/google-image.jpg';
    const title = 'Google';

    test('The component should be show correctly', () => {
        const wrapper = shallow(
            <GifGridItem id={id} url={url} title={title} />
        );

        expect(wrapper).toMatchSnapshot();
    });
    
})
