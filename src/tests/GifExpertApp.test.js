import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Tests for GifExpertApp component', () => {
  
    test('GifExpertApp should be shown correctly', () => {
      
        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
      
        const categories = ['pandas', 'The Simpsons'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    
});


