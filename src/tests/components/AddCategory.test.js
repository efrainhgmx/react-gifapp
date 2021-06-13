import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Test on <AddCategory /> component', () => {

    const setCategories = () => {};
    
    test('This component should be show correctly', () => {
        
        const wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
    });
    
})
