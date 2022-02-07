import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests for <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('should show component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('text box should change', () => {
      
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('should not post info by default on submit', () => {
      
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clear the textbox', () => {
        const value = 'elephants';

        // 1. Simulate the inputChange
        wrapper.find('input').simulate('change', {target: { value }} );

        //2. Simulate the submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        // 3. setCategories should have been called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. the input value should be 'elephants'
        expect( wrapper.find('input').prop('value')).toBe('');

    });
    
    
    
    
});
