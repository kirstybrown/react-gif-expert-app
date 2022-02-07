import {useFetchGifs} from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Tests for custom hook useFetchGifs', () => {
  
    test('should return the initial state', async() => {
      
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Simpsons' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('should return an array of 10 imgs from getGifs and loading in false', async() => {
      
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Simpsons' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    });
    
    
});
