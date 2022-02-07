import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['The Simpsons']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <p>Enter a topic here (search for "pandas" if you're feeling stressed 😉 ):</p>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key= { category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
