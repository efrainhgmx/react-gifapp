import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Test on custom hook', () => {
    
    test('Should return the initial state', () => {

        const resp = renderHook( () => useFetchGifs( 'One Punch') );
        //const { data, loading } = useFetchGifs( 'One Punch' );

        console.log(resp);
    })
    
})
