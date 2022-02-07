import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Tests for GifGridItem component', () => {

    const title = 'elephants';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should show <GifGridItem/> correctly', () => {                
        expect( wrapper ).toMatchSnapshot();        
    });

    test('should show title sent by props in a paragraph', () => {
      const paragraphText = wrapper.find('p').text().trim();
      expect( paragraphText ).toBe(title);
    });

    test('should have an image with url and alt sent by props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('should have animate__rubberBand', () => {
       const div = wrapper.find('div');
       const className = div.prop('className');
       expect( className.includes('animate__rubberBand')).toBe(true);
    });
    
    

});
