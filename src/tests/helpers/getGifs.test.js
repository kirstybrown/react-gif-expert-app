import { getGifs } from "../../helpers/getGifs";


describe('Tests with getGifs Fetch', () => {
  
    test('should fetch 10 elements', async() => {
      
        const gifs = await getGifs('elephants');
        expect( gifs.length ).toBe(10);
    });

    test('should only fetch elements with category', async() => {
      
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
    
});
