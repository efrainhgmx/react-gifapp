import { getGifs } from '../../helpers/getGifs';

describe('Fetch testing', () => {
    
    test('Should be bring 10 elements ', async() => {
         const gifs = await getGifs('One Punch');

         expect( gifs.length ).toBe( 10 );
    })

    test('Should be bring 10 elements ', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 10 );
   })
    
})
