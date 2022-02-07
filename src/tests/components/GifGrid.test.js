import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Tests for GifGrid component', () => {

    const category = 'pandas';
  
    test('should show GifGrid component correctly', () => {
      
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show items when images are loaded with useFetchGifs', () => {
      
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything.jpg',
            title: 'beautiful idea'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={category} />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    
});
