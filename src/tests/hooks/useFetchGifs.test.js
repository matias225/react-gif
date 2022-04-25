import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current; 
        
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

});