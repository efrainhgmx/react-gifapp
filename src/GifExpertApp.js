import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    //const categories = ['One punch', 'Pokemon', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

   // const handleAdd = () => setCategories([...categories, 'Hunter X']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map( category => (
                            <GifGrid 
                                key= { category }
                                category= { category }
                            />
                        )
                    )

                }
            </ol>
        </>
    );
}

export default GifExpertApp;