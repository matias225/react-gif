import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

    const [categories, setCategories] = useState(['One Piece']);
    
    // const handleAdd = () => {
    //     // setCategories( [...categories ,'Hunter X Hunter']);
    //     setCategories( cats => [ ...cats, 'Hunter X Hunter']);
    // }
    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ) 
                }
            </ol>
        </>
    )
}

export default GifApp